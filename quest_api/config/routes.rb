Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      # refactor to only the routes needed
      resources :admins, only: [:create, :index]
      resources :users, only: [:show, :create, :index]
      resources :questionnaires, only: [:show, :create, :index]
      resources :questions, only: [:show, :create, :index]
      resources :user_responses, only: [:show, :create, :index]
      get '/users/:email', to: 'users#show'
      get '/admins/:email', to: 'admins#show'
    end
  end
end
