class QuestionSerializer < ActiveModel::Serializer
  attributes :id,
             :label,
             :order,
             :questionnaire_id

  belongs_to :questionnaire

  has_many   :user_responses
  has_many   :users, through: :user_responses
end
