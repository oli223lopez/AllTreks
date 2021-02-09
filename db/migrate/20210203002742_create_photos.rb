class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.integer :national_park_id, null: false
      t.integer :user_id, null: false
      t.string :description
      t.timestamps
    end
  end
end
