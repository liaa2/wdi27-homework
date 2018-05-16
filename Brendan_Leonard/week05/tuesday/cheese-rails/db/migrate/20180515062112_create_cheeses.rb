class CreateCheeses < ActiveRecord::Migration[5.2]
  def change
    create_table :cheeses do |t|
      t.string :name
      t.text :description
      t.string :firmness
      t.string :region
      t.string :milk
      t.integer :size
      t.string :unit_of_measure
      t.float :price
      t.text :image

      t.timestamps
    end
  end
end
