class FixPhoto < ActiveRecord::Migration[5.2]
  def change
    remove_column :photos, :national_park_id
    add_column :photos, :hike_id, :integer
  end
end
