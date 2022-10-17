class Api::ReviewsController < ApplicationController

    before_action :require_logged_in

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

    end

    def review_params
        params.require(:review).permit(:body)
    end

end