class CreateMurderers < ActiveRecord::Migration[5.2]
  def change
    create_table :murderers do |t|
      t.string :first_name
      t.string :last_name
      t.integer :age
      t.string :location
      t.string :victim_type
      t.string :kill_method
      t.integer :kill_count
      t.string :fate

      t.timestamps null: false
    end
  end
end
