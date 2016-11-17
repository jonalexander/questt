class AdminSerializer < ActiveModel::Serializer
  attributes :id,
             :name,
             :email,
             :password

  # not including relationship in serializer, utilizing service class in controller
  # has_many   :questionnaires
end
