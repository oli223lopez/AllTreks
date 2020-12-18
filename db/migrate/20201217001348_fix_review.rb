class FixReview < ActiveRecord::Migration[5.2]
  def change
    remove_column :reviews, :hikers_id
    add_column :reviews, :hikes_id, :integer
  end
end
