class RemovesBooleansAddTypes < ActiveRecord::Migration[7.0]


  def change

    remove_column :businesses, :food
    remove_column :businesses, :auto
    remove_column :businesses, :bar

  end


end
