class Api::BusinessesController < ApplicationController

    wrap_parameters include: Business.attribute_names + ['outdoorSeating', 'phoneNumber', 'streetAddress'] # may need to edit or remove

    # def index
    #     @businesses = Business.all
    #     render :index
    # end

    def show
        @business = Business.find(params[:id])
            
        # render json: @business
        render :show
    end
    
    def type
        if params[:type] == "all"
            @businesses = Business.all
        else
            @businesses = Business.where(business_type: params[:type])
        end
        # filtered_businesses = []
        # @businesses.each do |business| # Instead of shoveling, add to an object and return? instead of Array
        #     filtered_businesses << business if business.business_type === params[:type] || params[:type] === 'all'
        #     #actual code will be if type array includes that business type
        # end
        # @businesses = filtered_businesses
        render :index
    end
    
    def business_params
        params.require(:business).permit(
            :name,
            :business_type,
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