class AddColumnType < ActiveRecord::Migration[7.0]
  def change
    add_column :businesses, :business_type, :string, null: false
  end
end
