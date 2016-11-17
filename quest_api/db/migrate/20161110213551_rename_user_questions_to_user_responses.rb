class RenameUserQuestionsToUserResponses < ActiveRecord::Migration[5.0]
  def change
    rename_table :user_questions, :user_responses
  end
end
