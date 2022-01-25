class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :project_name, null: false
      t.integer :creator_id, null: false
      t.text :description, null: false
      t.string :category, null: false
      t.integer :current_funding, null: false
      t.integer :goal_amount, null: false
      t.datetime :deadline, null: false

      t.timestamps
    end
    add_index :projects, :project_name, unique: true
  end
end
