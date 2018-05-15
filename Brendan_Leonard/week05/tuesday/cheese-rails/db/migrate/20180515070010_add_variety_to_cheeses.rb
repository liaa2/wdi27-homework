class AddVarietyToCheeses < ActiveRecord::Migration[5.2]
  def change
    add_column :cheeses, :varietal, :string
  end
end
