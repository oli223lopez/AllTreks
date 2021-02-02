class FixHikes < ActiveRecord::Migration[5.2]
  def change
    remove_column :hikes, :hike_API_id
    add_column :hikes, :difficulty, :string
    add_column :hikes, :length, :integer
    add_column :hikes, :route_type, :string
    add_column :hikes, :elevation_gain, :integer 
    add_column :hikes, :coordinates, :integer, array: true, default: []
    add_column :hikes, :summary, :string
  end
end
