class Admin < ApplicationRecord
  validates :name,
            :email,
            :password, presence: true

  validates :email,    uniqueness: true

  has_many :questionnaires
  has_many :questions, through: :questionnaires
end
