class Question < ApplicationRecord
  validates  :label,            presence: true
  validates  :order,            presence: true
  validates  :questionnaire_id, presence: true

  belongs_to :questionnaire

  has_many   :user_responses
  has_many   :users, through: :user_responses
end
