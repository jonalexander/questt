class AddValueResponses < ActiveRecord::Migration[5.0]
  def change
    add_column :responses, :value, :string
  end
end
