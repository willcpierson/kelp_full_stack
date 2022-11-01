class AddFavoriteToBusinesses < ActiveRecord::Migration[7.0]
  def change
    add_reference :businesses, :favorite, foreign_key: true
  end
end
