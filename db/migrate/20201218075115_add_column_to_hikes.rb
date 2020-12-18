class AddColumnToHikes < ActiveRecord::Migration[5.2]
  def change
    add_column :hikes, :description, :string
  end
end
