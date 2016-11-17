class ChangeNameToLabelOnQuestion < ActiveRecord::Migration[5.0]
  def change
    rename_column :questions, :name, :label
  end
end
