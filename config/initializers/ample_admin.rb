AmpleAdmin.configure do |config|

  config.root_permalink = 'index'
  config.auth_model = :user

  config.templates = {
    pages: {
      path: File.join(Rails.root, 'app', 'views', 'templates', 'pages'),
      default: '_default'
    }
  }

  config.attachment_convert_options = {
    :all => "-quality 80 -strip"
  }

  config.attachment_styles = {
    jumbotron: '1400x>',
    square: '270x270#',
    v_rectangle: '270x570#',
    h_rectangle: '570x270#',
    admin: '568x300>',
    thumb: '100x100#'
  }

end