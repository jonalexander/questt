class UserSerializer < ActiveModel::Serializer
  attributes :id,
             :name,
             :email,
             :password

  # not including relationship in serializer, utilizing service class in controller
  # has_many   :user_responses
  # has_many   :questions,      through: :user_responses
  # has_many   :questionnaires, through: :user_Responses
end
