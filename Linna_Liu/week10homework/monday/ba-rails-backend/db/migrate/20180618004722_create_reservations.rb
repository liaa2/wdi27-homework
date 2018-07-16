class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.integer :user_id
      t.integer :flight_id
      t.integer :row
      t.integer :col
      t.string :paid
      t.string :datetime

      t.timestamps
    end
  end
end