class Questionnaire < ApplicationRecord
  validates  :name, presence: true,
                    uniqueness: true

  belongs_to :admin   # required: true - by default

  has_many   :questions
  has_many   :user_responses
  has_many   :users, through: :user_responses
end
