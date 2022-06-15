# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Author.destroy_all
Book.destroy_all

sk = Author.create(name:'Steven King', age:23)
sc = Author.create(name:'Sean Carrol', age:53)

sk.books.create( title:'It', genre:'Horror')
sk.books.create( title:'Pet Cementary', genre:'Horror')

sc.books.create( title:'Universe stuff', genre:'Science')
sc.books.create( title:'Blackholes', genre:'Science')

puts "Authors in db #{Author.all.size}"
puts "Books in db #{Book.all.size}"
