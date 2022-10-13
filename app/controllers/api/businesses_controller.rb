class Api::BusinessesController < ApplicationController

    wrap_parameters include: Business.attribute_names + ['outdoorSeating', 'phoneNumber', 'streetAddress'] # may need to edit or remove

    def index
        @businesses = Business.all #will be search(params) instead of all

        render json: @businesses
    end

    def show
        @business = Business.find(params[:id])
    end

    
    def business_params
        params.require(:business).permit(
            :name,
            :description,
            :food,
            :auto,
            :bar,
            :outdoor_seating,
            :delivery,
            :takeout,
            :phone_number,
            :website,
            :zip,
            :city,
            :state,
            :lat,
            :lng
        )
    end



end