Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post 'api/test', to: 'application#test'

  namespace :api, defaults: { format: :json } do
    resources :users, only: :create
    resources :businesses do
      get '/category/:type', to: 'businesses#type', on: :collection
    end 
    resources :businesses, only: [:show, :index] 
    resources :reviews, only: [:create, :destroy, :index, :show, :update]
    resource :session, only: [:show, :create, :destroy]
  end

  # resources :businesses do
  #   get 'type', on: :collection
  # end

  # only: [:index, :show] 

  get '*path', to: "static_pages#frontend_index"
end
