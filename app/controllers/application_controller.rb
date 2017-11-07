class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_action :authenticate_user!, if: proc { params[:controller].include?('admin') }

  unless Rails.env.development? || Rails.env.test?
    rescue_from StandardError,                                with: :render_error
    rescue_from ActiveRecord::RecordNotFound,                 with: :routing_error
    rescue_from ActionController::RoutingError,               with: :routing_error
    rescue_from ActionController::UnknownController,          with: :routing_error
    rescue_from AbstractController::ActionNotFound,           with: :routing_error
  end

  def routing_error
    @page_title = 'Page Not Found'
    @current_object = nil
    self.response_body = nil
    render(template: "errors/404", status: 404) and return
  end

  def render_error(e)
    @page_title = 'Server Error'
    @current_object = nil
    self.response_body = nil
    Rollbar.error(e)
    render(template: "errors/500", status: 500) and return
  end

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
