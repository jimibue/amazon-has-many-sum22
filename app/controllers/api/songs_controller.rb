class Api::SongsController < ApplicationController

    def index
      render json: Song.all
    end

    def show
        song = Song.find(params[:id])
        render json: {song: song, artists: song.artists}
    end

    def create 
      song = Song.create(name:params[:name])
      ids = params[:ids]
      idsArray = ids.split(',')
      # assign this song to the artists
      idsArray.each do | artist_id |
        ArtistSong.create(song_id:song.id, artist_id: artist_id )
      end

      render json: {song: song, artists: song.artists}
    end

    # def create_artist_song
    #     ArtistSong.create(song_id:song.id, artist_id: artist_id )
    # end

    def all_data
        # this a custom method I am going to define
        # in the artist_song.rb class
       render json: ArtistSong.all_friendly_data
    end
end
