class CreateSerialkillers < ActiveRecord::Migration[5.2]
  def change
    create_table :serialkillers do |t|
      t.string :first_name
      t.string :last_name
      t.text :image
      t.boolean :alive
      t.integer :victims

      t.timestamps
    end
  end
end
