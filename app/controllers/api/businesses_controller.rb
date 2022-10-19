class Api::BusinessesController < ApplicationController

    wrap_parameters include: Business.attribute_names + ['outdoorSeating', 'phoneNumber', 'streetAddress'] # may need to edit or remove

    def index #Job taken over by custom type method
        @businesses = Business.all #will be search(params) instead of all
        render :index
    end

    def show
        @business = Business.find(params[:id])
            
        render json: @business
    end
    
    def type
        @businesses = Business.all
        filtered_businesses = []
        @businesses.each do |business| # Instead of shoveling, add to an object and return? instead of Array
            filtered_businesses << business if business.business_type === params[:type] || params[:type] === 'all'
            #actual code will be if type array includes that business type
        end
        @businesses = filtered_businesses
        render :index
    end
    
    def business_params
        params.require(:business).permit(
            :name,
            :description,
            :business_type,
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