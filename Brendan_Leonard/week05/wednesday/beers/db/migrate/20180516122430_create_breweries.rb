class CreateBreweries < ActiveRecord::Migration[5.2]
  def change
    create_table :breweries do |t|
      t.string :name
      t.string :country
      t.string :region
      t.integer :founded
      t.text :logo_image

      t.timestamps
    end
  end
end
