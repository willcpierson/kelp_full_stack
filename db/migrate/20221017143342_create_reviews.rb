class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.string :body, null: false

      t.references :business, null: false
      t.references :user, null: false
      t.timestamps
    end
  end
end
