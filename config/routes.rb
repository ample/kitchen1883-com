Rails.application.routes.draw do
  ample_admin_routes [ :pages ]
  ample_public_routes [ :pages ],
    controllers: { pages: 'public/pages' }
end