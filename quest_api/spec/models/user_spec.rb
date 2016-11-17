require 'rails_helper'

RSpec.describe User, type: :model do
  Admin.destroy_all
  Questionnaire.destroy_all
  User.destroy_all
  UserResponse.destroy_all

  user = User.create(
                      name: 'user',
                      email: 'user@user.com',
                      password: 'pw' )
  admin = Admin.create(
                      name: 'admin',
                      email: 'admin@admin.com',
                      password: 'pw')
  questionnaire = Questionnaire.create(
                                      admin_id: admin.id,
                                      name: 'questionnaire')
  q1 = Question.create(
                      label: 'label1',
                      questionnaire_id: questionnaire.id,
                      order: 1)
  q2 = Question.create(
                      label: 'label2',
                      questionnaire_id: questionnaire.id,
                      order: 2)

  ur1 = UserResponse.create(
                      user_id: user.id,
                      question_id: q1.id,
                      questionnaire_id: questionnaire.id,
                      value: "value1")
  ur2 = UserResponse.create(
                      user_id: user.id,
                      question_id: q2.id,
                      questionnaire_id: questionnaire.id,
                      value: "value2")

  it "succesfully creates user" do
      expect(user).to be_a(User)
  end

  it 'has many user_responses' do
      expect(user.user_responses.count).to eq(2)
  end

  it 'has many questions through user_responses' do
      expect(user.questions.count).to eq(2)
  end

  it 'has many questionnaires through user_response' do
    expect(user.questionnaires).to be_truthy
  end

end
