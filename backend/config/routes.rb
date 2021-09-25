Rails.application.routes.draw do
  namespace :api do
    resources :user, only: [:create, :show]
    resources :user_taps, only: [:create]
  end
end
