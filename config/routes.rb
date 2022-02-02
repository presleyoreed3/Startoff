Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:index, :show, :update, :create, :destroy]
    resources :projects, only: [:index, :show, :create, :update, :destroy]
    resources :rewards, only: [:index, :show, :create, :update]
    resource :session, only: [:create, :destroy]
    get "/projects/category/:categoryName", :to => "projects#index"
    get :search, to: "products#search", as: "search"
  end
  
end
