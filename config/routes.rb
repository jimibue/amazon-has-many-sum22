Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api do

    # by nesting it will prepend /authors/:author_id
    # to all of our book routes
    resources :authors do
      resources :books 
    end

    get '/books', to: 'books#all_books'
    get '/books/:id', to: 'books#find_book'
    get '/x/:y', to: 't#z'

    get '/artists', to: 'artists#index'
    get '/artists/:id', to: 'artists#show'
    
    get '/songs', to: 'songs#index'
    post '/songs', to: 'songs#create'
    get '/songs/:id', to: 'songs#show'
    get '/artist_songs', to: 'songs#all_data'
  end
end
