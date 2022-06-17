class ArtistSong < ApplicationRecord
  belongs_to :artist
  belongs_to :song

  # self. makes this a class method... meaning I call it on the class
  def self.all_friendly_data
    # this is a horible way to do this...
    # we want to use sql
    ArtistSong.all.map do |a_s|
      {id:a_s.id ,
      artist_id: a_s.artist_id, 
      song_id:a_s.song_id, 
      artist_name: a_s.artist.name,
      song_name: a_s.song.name
    }
    end
  end
end
