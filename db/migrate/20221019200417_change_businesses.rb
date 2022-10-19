class ChangeBusinesses < ActiveRecord::Migration[7.0]
  def change
    remove_column :businesses, :description
    remove_column :businesses, :outdoor_seating
    remove_column :businesses, :delivery
    remove_column :businesses, :takeout
  end
end
