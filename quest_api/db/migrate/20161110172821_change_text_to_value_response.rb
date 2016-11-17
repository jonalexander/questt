class ChangeTextToValueResponse < ActiveRecord::Migration[5.0]
  def change
    # change_column :responses, :text, :value
    # this is incorrect - i should have used rename_column.
  end
end
