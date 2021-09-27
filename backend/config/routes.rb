Rails.application.routes.draw do
  namespace :api do
    resources :users, only: [:create, :show]
    resources :user_taps, only: [:create]
    resources :themes, only: [:index, :show, :create]
    mount_devise_token_auth_for 'User', at: 'auth', controllers: {
      registrations: 'api/auth/registrations'
    }
  end
end
