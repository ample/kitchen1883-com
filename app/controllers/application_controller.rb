class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_action :authenticate_user!, if: proc { params[:controller].include?('admin') }

  protected

    helper_method :cacheable?, :current_publish, :current_meta_objects

    def current_meta_objects
      []
    end

    def current_publish
      @current_publish ||= begin
        Rails.cache.fetch('current_publish') do
          AmpleAdmin::Publish.order('created_at DESC').try(:first)
        end
      end
    end

    def cacheable?
      excluded_controllers = %w(public/search)
      ! excluded_controllers.include? params[:controller]
    end

end
