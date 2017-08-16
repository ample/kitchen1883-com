Rails.application.routes.draw do
  devise_for :users
  ample_admin_routes [ :pages, :users ],
    controllers: { users: 'admin/users' }
  ample_public_routes [ :pages ],
    controllers: { pages: 'public/pages' }
end