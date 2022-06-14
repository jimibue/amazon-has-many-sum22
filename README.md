# README

# Models
author {id: PK, name: string, age:integer}
book {id: PK title: string, genre:string, author_id:FK}

# rails commands
rails g model author name age:integer
rails g model book title genre author:belongs_to

rails g controller api/authors
rails g controller api/books

# routes
```ruby
namespace :api do
  resources :authors do
     resources :books
  end
end
```
what this will generate is our nested routes

get '/api/authors', to 'authors#index'
post '/api/authors', to 'authors#create'
get '/api/authors/:id', to 'authors#show'
put '/api/authors/:id', to 'authors#update'
delete '/api/authors/:id', to 'authors#destroy'


post '/api/authors/:author_id/books', to 'books#create'
get '/api/authors/:author_id/books/:id', to 'books#show'
put '/api/authors/:author_id/books/:id', to 'books#update'
delete '/api/authors/:author_id/books/:id', to 'books#destroy'


get '/api/:authors/author_id/:books/id/t', to 'books#yo'

axios.get('/api/anything/author_id/sdfsdf/id/t)
axios.get('/api/anything/author_id/sdfsdf/id/t)
params[:authors] = anything
params[:books] = sdfsdf

# controllers