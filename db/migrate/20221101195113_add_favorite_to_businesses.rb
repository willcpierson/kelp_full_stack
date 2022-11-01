class AddFavoriteToBusinesses < ActiveRecord::Migration[7.0]
  def change
    add_reference :businesses, :favorite, null: false, foreign_key: true
  end
end
