AmpleAdmin.configure do |config|

  config.root_permalink = 'index'

  config.templates = {
    pages: {
      path: File.join(Rails.root, 'app', 'views', 'templates', 'pages'),
      default: '_default'
    }
  }

end