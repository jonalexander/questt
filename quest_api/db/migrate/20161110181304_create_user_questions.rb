class CreateUserQuestions < ActiveRecord::Migration[5.0]
  def change
    create_table :user_questions do |t|
      t.integer :user_id
      t.integer :question_id
      t.integer :questionnaire_id

      t.timestamps
    end
  end
end
