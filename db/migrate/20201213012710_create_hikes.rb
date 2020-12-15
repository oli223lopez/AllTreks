class CreateHikes < ActiveRecord::Migration[5.2]
  def change
    create_table :hikes do |t|
      t.string :name, null: false
      t.integer :national_park_id
      t.integer :hike_API_id, null: false
      t.timestamps
    end
  end
end
