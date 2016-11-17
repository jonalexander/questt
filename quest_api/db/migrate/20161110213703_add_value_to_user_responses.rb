class AddValueToUserResponses < ActiveRecord::Migration[5.0]
  def change
    add_column :user_responses, :value, :text
  end
end
