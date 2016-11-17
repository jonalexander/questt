class RemoveCQidFromResponses < ActiveRecord::Migration[5.0]
  def change
    remove_column :responses, :completed_questionnaire_id, :integer
  end
end
