class CreateBusinesses < ActiveRecord::Migration[7.0]
  def change
    create_table :businesses do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.boolean :food, null: false
      t.boolean :auto, null: false
      t.boolean :bar, null: false
      t.boolean :outdoor_seating, null: false
      t.boolean :delivery, null: false
      t.boolean :takeout, null: false
      t.integer :phone_number
      t.string :website
      t.integer :zip, null: false
      t.string :street_address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.float :lat
      t.float :lng

      t.timestamps
    end
  end
end
