class CreateRoyals < ActiveRecord::Migration[5.2]
  def change
    create_table :royals do |t|
      t.text :name
      t.date :dob
      t.text :spouse
      t.text :title
      t.text :image

      t.timestamps
    end
  end
end
