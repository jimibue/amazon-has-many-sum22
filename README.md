# README
Before getting started let's think about how to break this up into
smaller tasks..

# BREAKING UP INTO SMALLER TASKS

## BACKEND
  ### PRE CODING
  - designing your db (lucidchart) (entity realtionship diagram)

  ### CODING BE
  > subset 1 model (custom sql and model methods, validations)
  - create our models and setup associations 
  - seed and test

  > subset 2 routes/controllers (crud)
  - fill out routes/controllers
  - test with postman

## FRONTEND

 ### PRE CODING
 - Desing your frontend (wireframe) 

 ### CODING FE
 > FRONTEND subset 1 (UI ONLY)
 - setup react router (pages...) * this started
 - setuping other react components (forms, tables, list, etc)
 - TEST

 > FRONTEND subset 2 (DATA/API ONLY)
 - axios actual getting/sendind data to your api
 - managing state (redux, provider, manging state on the component)
 - TEST

 > FRONTEND subset 3 (HOOKING 1 + 2)
 - hooking up state/ui/react-router/forms etc
 - TEST

# Backend
# Models
author {id: PK, name: string, age:integer}

book {id: PK title: string, genre:string, author_id:FK}

# rails commands

```
rails g model author name age:integer
rails g model book title genre author:belongs_to

rails g controller api/authors
rails g controller api/books
```

# routes
```ruby
namespace :api do
  resources :authors do
     resources :books
  end
end
```
what this will generate is our nested routes

```ruby
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

# DEMO CALL
# axios.get('/api/anything/author_id/sdfsdf/id/t)
# params[:authors] = anything
# params[:books] = sdfsdf
```

# controllers
see controller files



# Front End

 # basic wireframe  and react router setup
 [codesandbox](https://codesandbox.io/s/amazon-router-demo-cbige0)


 ## PROVIDER BASICS
 see DataProvider for full example

 ```js
 // React.createContext API


import React from "react";

// 1. a way to consume data (useContext hook)
// we export the context and give that to the useContext hook
// in another component
// let x = useContext(DataContext)
export const DataContext = React.createContext()

//2.  a way to provide data with the value props
const DataProvider = (props) =>{
    return (
        <DataContext.Provider value={{}}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataProvider

// in another component
// let x = useContext(DataContext)
// x is going to be the value of the value prop
```
