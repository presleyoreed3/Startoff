class AddIndexToCategory < ActiveRecord::Migration[5.2]
  def change
  end
  add_index :projects, :category
end
