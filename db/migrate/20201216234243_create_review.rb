class CreateReview < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :description, null: false
      t.integer :rating, null: false
      t.integer :hikers_id, null: false
      t.integer :users_id, null: false
    end
    add_index :reviews, :hikers_id
    add_index :reviews, :users_id
  end
end


