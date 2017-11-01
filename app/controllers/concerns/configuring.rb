require 'active_support/concern'
require 'kitchen1883/meta_tag'

module Configuring
  extend ActiveSupport::Concern
  include ActionView::Helpers::SanitizeHelper
  include Public::PagesHelper
  include Imgix::Rails::UrlHelper

  included do
    before_action :set_page_title
    helper_method :current_meta_objects
  end

  protected

    def set_page_title
      @page_title ||= begin
        current_meta_object.settings.find_by_key('page-title') || current_meta_object.try(:title)
      rescue ActiveRecord::RecordNotFound
      rescue NoMethodError
      end
    end

    def current_meta_object
      @current_meta_object ||= current_object
    end

    def current_meta_objects
      @current_meta_objects = begin
        return [] unless current_meta_object && current_meta_object.respond_to?(:settings)
        settings = {}.tap do |h|
          current_meta_object.settings.of_type(:meta).reject{|m| m.key == 'page-title' }.each do |s|
            h[s.key] = Kitchen1883::MetaTag.new(s)
          end
        end
        global_meta_objects.merge(default_meta_objects).merge(settings).values
      end
    end

    def default_meta_objects
      h = {}
      if current_meta_object.is_a?(AmpleAdmin::Page) ||
         current_meta_object.is_a?(AmpleAdmin::Post) ||
         current_meta_object.is_a?(Location)

        h['description'] = Kitchen1883::MetaTag.new({ key: 'description', value: sanitize(current_meta_object.body.truncate(160), tags: []) }) if current_meta_object && current_meta_object.try(:body).present?
        h['og:title'] = Kitchen1883::MetaTag.new({ key: 'og:title', value: (page_title || current_meta_object.to_s) })
        h['og:url'] = Kitchen1883::MetaTag.new({ key: 'og:url', value: request.original_url })
        h['og:image'] = Kitchen1883::MetaTag.new({ key: 'og:image', value: current_og_image })
      end
      return h
    end

    def global_meta_objects
      {}.tap do |h|
        AmpleAdmin::Setting.of_type('Global Meta').each do |s|
          h[s.key] = Kitchen1883::MetaTag.new(s)
        end
      end
    end

    def current_og_image
      source = nil
      if current_meta_object

        # If meta object has a jumbotron...
        if current_meta_object.try(:has_jumbotron?)
          source = ix_image_url current_meta_object.jumbotron(:og), auto: 'format,compress'

        # If parent page has a jumbotron...
        elsif current_object.try(:has_jumbotron?)
          source = ix_image_url current_object.jumbotron(:og), auto: 'format,compress'

        end
        source = ActionController::Base.helpers.image_path('og_logo.png') if source.nil?
      end
      URI.join(root_url, source)
    end

end

