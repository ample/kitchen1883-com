AmpleAdmin::Page.class_eval do

    # --------------------------------- Instance Methods

    def jumbotron(style)
      URI.escape attachment.file.path(style) if has_jumbotron?
    end

    def has_jumbotron?
      attachment.present?
    end

end