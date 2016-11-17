class CreateResponses < ActiveRecord::Migration[5.0]
  def change
    create_table :responses do |t|
      t.string :text
      t.integer :question_id
      t.integer :user_id
      t.integer :completed_questionnaire_id

      t.timestamps
    end
  end
end
