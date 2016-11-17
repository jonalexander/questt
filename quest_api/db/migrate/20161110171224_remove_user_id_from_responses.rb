class RemoveUserIdFromResponses < ActiveRecord::Migration[5.0]
  def change
    remove_column :responses, :user_id, :integer
  end
end
