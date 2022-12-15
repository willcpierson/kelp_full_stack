json.favorites do
    @favorites.each do |favorite|
        json.set! favorite.id do
            json.extract! favorite, :id, :business_id, :user_id
        end
    end
end