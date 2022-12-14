class Api::ReviewsController < ApplicationController

    before_action :require_logged_in, only: [:create, :destroy]

    def create
        @review = Review.new(review_params)
        if @review.save!
            render json: @review
        else
            render json: { errors: @user.errors.full_messages }
        end
    end

    def destroy
        @review = Review.find(params[:id])
        if @review.destroy!
            puts 'Successfully destroyed'
        else
            puts 'Unsuccessful destroy attempt'
        end
    end

    def update
        puts @review
        @review = Review.find(params[:id])
        if @review.update(review_params)
            render json: @review
        else
            render json: { errors: @user.errors.full_messages }
        end
    end

    def index
        @reviews = Review.all()
                
        render :index
        # render
    end

    private

    def review_params
        params.require(:review).permit(:body, :user_id, :business_id)
    end

end