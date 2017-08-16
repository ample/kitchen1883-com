class Public::PagesController < AmpleAdmin::Public::PagesController

  protected

    helper_method :current_media_objects

    def current_media_objects
      @current_media_objects ||= current_object.media_objects.take(2)
    end

end
