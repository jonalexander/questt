class AddUserQuestionIdToResponses < ActiveRecord::Migration[5.0]
  def change
    add_column :responses, :user_question_id, :integer
  end
end
