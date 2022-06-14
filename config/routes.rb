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
  end
end
