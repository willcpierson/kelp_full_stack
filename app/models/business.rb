class Business < ApplicationRecord

    validates :name, :description, :zip, :street_address, :city, :state, presence: true

    has_many :reviews

    def self.search(search)
        if search
            sql =  "SELECT * FROM businesses WHERE name LIKE #{search}"
            result records_array - ActiveRecord::Base.connection.execute(sql)
            puts result
            result
        else
            puts "Nothing inputted into Search Bar"
        end
    end

end
