Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :hikes, only: [:show, :index]
    resources :national_parks, only: [:show]
    resources :reviews, only: [:show, :create, :update, :destroy]
  end
  
  root 'static_pages#root'
  
end
