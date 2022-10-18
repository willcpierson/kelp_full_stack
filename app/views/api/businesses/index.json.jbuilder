json.businesses do
    @businesses.each do |business|
        json.set! business.id do
            json.extract! business, :id, :name, :description, :phone_number, :website, :zip,
            :street_address, :city, :state, :lat, :lng, :business_type, :created_at, :updated_at
        end
    end
end