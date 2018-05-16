class AddPasteurisedToCheeses < ActiveRecord::Migration[5.2]
  def change
    add_column :cheeses, :pasteurised, :boolean
  end
end
