class Api::AuthorsController < ApplicationController
    before_action :set_author, only: [:show, :update, :destroy]

    def index
      render json: Author.all
    end

    def show
        render json: @author
    end

    def create
        # create the author in memory
        @author = Author.create(author_params)
        # we try to save it to the db
        if(@author.save)
            render json: @author
        else
            render json:  @author.errors.full_message, status: 422
        end
    end


    def update
        # get the author from db, in our before action we set it
        if(@author.update(author_params))
            render json: @author
        else
            render json:  @author.errors.full_message, status: 422
        end
    end

    def destroy
        # destory removes from db and returns the ting that was destroyed
        render json: @author.destroy
    end



    
    private

    def set_author
      @author = Author.find(params[:id])
    end

    def author_params
      params.require(:author).permit(:name, :age)
    end

end
