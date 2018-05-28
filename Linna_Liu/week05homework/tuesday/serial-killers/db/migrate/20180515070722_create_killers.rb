class CreateKillers < ActiveRecord::Migration[5.2]
  def change
    create_table :killers do |t|
      t.string :name
      t.text :image
      t.string :country
      t.integer :years_active_from
      t.integer :years_active_to
      t.integer :proven_victims
      t.text :notes

      t.timestamps
    end
  end
end
