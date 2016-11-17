class QuestionnaireSerializer < ActiveModel::Serializer
  attributes :id,
             :name,
             :admin_id

  belongs_to :admin

  # not including relationship in serializer, utilizing service class in controller
  # has_many   :questions
  # has_many   :user_responses
  # has_many   :users, through: :user_responses
end
