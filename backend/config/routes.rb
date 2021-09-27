Rails.application.routes.draw do
  namespace :api do
    get  "users/myinfo"  => "users#myinfo"
    resources :user_taps, only: [:create]
    resources :themes, only: [:index, :show, :create]
    mount_devise_token_auth_for 'User', at: 'auth', controllers: {
      registrations: 'api/auth/registrations'
    }
  end
end
