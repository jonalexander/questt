class User < ApplicationRecord
  validates :name,
            :email,
            :password, presence: true

  validates :email,    uniqueness: true

  has_many :user_responses
  has_many :questions,      through: :user_responses
  has_many :questionnaires, through: :user_responses
end
