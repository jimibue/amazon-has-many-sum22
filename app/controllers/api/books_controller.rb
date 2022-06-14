class Api::BooksController < ApplicationController
    # this is different
    before_action :set_author, except: [:all_books, :find_book]
    before_action :set_book, only: [:show, :update, :destroy]

    def all_books
        render json: Book.all
    end

    def find_book
        render json: Book.find(params[:id])
    end

    def index
     # this is different use  @author.books, not Book.all
      render json: @author.books
    end

    def show
        render json: @book
    end

    def create
        # this is different @auth.books.new not Book.new
        @book = @author.books.new(book_params)
        if(@book.save)
            render json: @book
        else
            render json: @book.errors.full_message, status: 422
        end
    end

    def update
        if(@book.update(book_params))
            render json: @book
        else
            render json: @book.errors.full_message, status: 422
        end
    end

    def destroy
        render json: @book.destroy
    end

    
    private 

    def set_author
      @author = Author.find(params[:author_id])
    end

    def set_book
        # this is different we use @auth.books to find book.. dont do Book.find(params[:id])
       @book =  @author.books.find(params[:id])
    end

    def book_params
      params.require(:book).permit(:title, :genre)
    end
end
