class CreateFavorites < ActiveRecord::Migration[7.0]
  def change
    create_table :favorites do |t|
      t.references :business, null: false
      t.references :user, null: false

      t.timestamps
    end
  end
end
