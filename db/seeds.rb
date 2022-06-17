# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Author.destroy_all
Book.destroy_all
ArtistSong.destroy_all
Song.destroy_all
Artist.destroy_all

sk = Author.create(name:'Steven King', age:23)
sc = Author.create(name:'Sean Carrol', age:53)

sk.books.create( title:'It', genre:'Horror')
sk.books.create( title:'Pet Cementary', genre:'Horror')

sc.books.create( title:'Universe stuff', genre:'Science')
sc.books.create( title:'Blackholes', genre:'Science')

puts "Authors in db #{Author.all.size}"
puts "Books in db #{Book.all.size}"

tool = Artist.create(name:'Tool')
mj = Artist.create(name:'MJ')
b = Artist.create(name:'Britney')

s1 = Song.create(name:'46 & you, t-b')
s2 = Song.create(name:'tool only, t')
s3 = Song.create(name:'britney you are not ok, mj-b')
s4 = Song.create(name:'mj and brit and tool song')
s5 = Song.create(name:'brit and tool song 1')
s6 = Song.create(name:'brit and tool song 2')
s7 = Song.create(name:'mj and tool song 1')
s8 = Song.create(name:'mj and tool song 2')

ArtistSong.create(song_id: s1.id, artist_id: tool.id)
ArtistSong.create(song_id: s1.id, artist_id: b.id)

ArtistSong.create(song_id: s2.id, artist_id: tool.id)

ArtistSong.create(song_id: s3.id, artist_id: b.id)
ArtistSong.create(song_id: s3.id, artist_id: mj.id)

ArtistSong.create(song_id: s4.id, artist_id: mj.id)
ArtistSong.create(song_id: s4.id, artist_id: b.id)
ArtistSong.create(song_id: s4.id, artist_id: tool.id)


ArtistSong.create(song_id: s5.id, artist_id: b.id)
ArtistSong.create(song_id: s5.id, artist_id: tool.id)

ArtistSong.create(song_id: s6.id, artist_id: b.id)
ArtistSong.create(song_id: s6.id, artist_id: tool.id)


ArtistSong.create(song_id: s7.id, artist_id: mj.id)
ArtistSong.create(song_id: s7.id, artist_id: tool.id)

ArtistSong.create(song_id: s8.id, artist_id: mj.id)
ArtistSong.create(song_id: s8.id, artist_id: tool.id)

puts "artist size: #{Artist.all.size}"
puts "songs size: #{Song.all.size}"
puts "artist_songs size: #{ArtistSong.all.size}"
