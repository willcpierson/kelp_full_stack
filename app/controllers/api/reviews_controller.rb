class Api::ReviewsController < ApplicationController

    before_action :require_logged_in, only: [:create, :destroy]

    def create
        @review = Review.new()
        if @review.save!
            render json: @review
        else
            render json: { errors: @user.errors.full_messages }
        end
    end

    def destroy

    end

    def index
        @reviews = Review.all()
        
        render json: @reviews
    end

    def review_params
        params.require(:review).permit(:body)
    end

end