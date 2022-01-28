class CreateRewards < ActiveRecord::Migration[5.2]
  def change
    create_table :rewards do |t|
      t.integer :project_id, null: false
      t.string :tier_name, null: false
      t.integer :price, null: false
      t.string :reward, null: false
      t.text :reward_description, null: false

      t.timestamps
    end
    add_index :rewards, :project_id
  end
end
