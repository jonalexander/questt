FactoryGirl.define do
  factory :response do
    text "MyString"
    question_id 1
    user_id 1
    completed_questionnaire_id 1
  end
end
