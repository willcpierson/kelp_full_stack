json.extract! @business, :id, :name, :phone_number, :website, :zip,
    :street_address, :city, :state, :lat, :lng, :business_type, :created_at, :updated_at
json.photoURL @business.photo.url
