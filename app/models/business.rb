class Business < ApplicationRecord

    validates :name, :zip, :street_address, :city, :state, presence: true

    has_many :reviews

    has_one_attached :photo

    # def self.search(search) #Come back when initizalizing advanced search functionality
    #     if search
    #         sql =  "SELECT * FROM businesses WHERE name LIKE #{search}"
    #         result records_array - ActiveRecord::Base.connection.execute(sql)
    #         puts result
    #         result
    #     else
    #         puts "Nothing inputted into Search Bar"
    #     end
    # end

end
