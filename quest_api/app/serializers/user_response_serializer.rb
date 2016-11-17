class UserResponseSerializer < ActiveModel::Serializer
  attributes :id,
             :user_id,
             :question_id,
             :questionnaire_id

  belongs_to :user
  belongs_to :question
  belongs_to :questionnaire
end
