class Api::FavoritesController < ApplicationController

    before_action :require_logged_in, only: [:create, :destroy]

    def index
        @favorites = Favorite.where(user_id: [params[:id]])
    end

    def create
        @favorite = Favorite.new()
        @favorite.user_id = current_user.id
        @favorite.business_id = params[:business_id]
        if @favorite.save!
            puts 'Successful favorite save!'
        else
            puts 'Unsuccessful creation of a favorite'
        end
    end

    def destroy
        @favorite = Favorite.find(params[:id])
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
