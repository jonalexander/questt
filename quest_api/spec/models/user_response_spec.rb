require 'rails_helper'

RSpec.describe UserResponse, type: :model do
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

  ur1 = UserResponse.create(
                            user_id: user.id,
                            question_id: q1.id,
                            questionnaire_id: questionnaire.id,
                            value: 'value')





  it "succesfully creates user_response" do
      expect(ur1).to be_a(UserResponse)
  end

  it 'belongs to a questionnaire' do
    expect(ur1.questionnaire).to eq(questionnaire)
  end

  it 'belongs to a user' do
    expect(ur1.user).to eq(user)
  end

  it 'belongs to a question' do
    expect(ur1.question).to eq(q1)
  end

end
