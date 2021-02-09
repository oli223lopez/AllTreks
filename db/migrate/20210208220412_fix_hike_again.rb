class FixHikeAgain < ActiveRecord::Migration[5.2]
  def change
    remove_column :hikes, :length
    add_column :hikes, :length, :float
    remove_column :hikes, :coordinates
    add_column :hikes, :coordinates, :string, array: true, default: []
  end
end


