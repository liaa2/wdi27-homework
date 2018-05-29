class CreateBoxcats < ActiveRecord::Migration[5.2]
  def change
    create_table :boxcats do |t|
      t.string :name
      t.text :image
      t.integer :box_volume
      t.integer :cat_size
      t.text :cat_origin

      t.timestamps
    end
  end
end
