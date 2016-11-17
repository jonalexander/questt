class UserResponse < ApplicationRecord
  validates  :value,
             :user_id,
             :question_id,
             :questionnaire_id, presence: true

  belongs_to :user
  belongs_to :question
  belongs_to :questionnaire
end
