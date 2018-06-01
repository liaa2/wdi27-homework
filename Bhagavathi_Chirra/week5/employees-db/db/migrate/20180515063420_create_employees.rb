class CreateEmployees < ActiveRecord::Migration[5.2]
  def change
    create_table :employees do |t|
      t.text :number
      t.string :first_name
      t.string :last_name
      t.string :job_title
      t.datetime :date_of_birth
      t.text :image
      t.integer :salary

      t.timestamps
    end
  end
end
