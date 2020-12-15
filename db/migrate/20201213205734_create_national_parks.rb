class CreateNationalParks < ActiveRecord::Migration[5.2]
  def change
    create_table :national_parks do |t|
      t.string :name, null: false
      t.float :lat, null: false
      t.float :lon, null: false
      t.timestamps
    end
  end
end
