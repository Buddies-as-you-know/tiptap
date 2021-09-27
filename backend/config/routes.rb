Rails.application.routes.draw do
  namespace :api do
    resources :users, only: [:create, :show]
    resources :user_taps, only: [:create]
    resources :themes, only: [:index, :show, :create]
  end
end
