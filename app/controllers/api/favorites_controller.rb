class FavoritesController < ApplicationController

    before_action :require_logged_in, only: [:create, :destroy]

    def index
        @favorites = Favorite.where(user_id: [params[:id]])
    end

    def create
        @favorite = Favorite.new(favorite_params)
        if @favorite.save!
            render json: @review
        else
            render json {errors: @user.errors.full_messages}
        end
    end

    def destroy
        @favorte = Favorite.find(params[:id])
        if @favorite.destroy!
            puts "Successfully destroyed"
        else
            puts "Unsuccessfully destroyed"
        end
    end

    def favorite_params
        params.require(:favorite).permit(:user_id, :business_id)
    end

end
