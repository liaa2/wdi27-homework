class CreateBeers < ActiveRecord::Migration[5.2]
  def change
    create_table :beers do |t|
      t.string :name
      t.string :style
      t.text :description
      t.string :size
      t.float :abv
      t.float :std_drinks
      t.text :image
      t.integer :brewery_id

      t.timestamps
    end
  end
end
