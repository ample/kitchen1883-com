class Public::PagesController < AmpleAdmin::Public::PagesController

  include Configuring

  def show
    if current_permalinks == ['menu']
      redirect_to(first_child_path)
      return
    end
    super
  end

  protected

    helper_method :current_media_objects

    def current_media_objects
      @current_media_objects ||= current_object.media_objects.take(2)
    end

    def first_child_path
      '/' + current_object.children.first.path.map(&:permalink).join('/')
    end

end
