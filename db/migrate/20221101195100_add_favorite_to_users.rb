class AddFavoriteToUsers < ActiveRecord::Migration[7.0]
  def change
    add_reference :users, :favorite, null: false, foreign_key: true
  end
end
