class Api::ArtistsController < ApplicationController

    def index
      render json:Artist.all
    end

    # get 'api/artist/:id'
    def show
        artist = Artist.find(params[:id])
        render json: {artist: artist, songs: artist.songs}
    end
end
