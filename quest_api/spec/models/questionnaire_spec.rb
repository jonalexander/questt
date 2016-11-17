require 'rails_helper'

RSpec.describe Questionnaire, type: :model do
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

  questionnaire2 = Questionnaire.create(
                                      admin_id: admin.id,
                                      name: 'questionnaire2')
  admin.questionnaires << questionnaire
  admin.questionnaires << questionnaire2
  q1 = Question.create(
                      label: 'label1',
                      questionnaire_id: questionnaire.id,
                      order: 1)
  q2 = Question.create(
                      label: 'label2',
                      questionnaire_id: questionnaire.id,
                      order: 2)
  admin.questionnaires[0].questions << q1
  admin.questionnaires[0].questions << q2


  it "succesfully creates questionnaire" do
      expect(questionnaire).to be_a(Questionnaire)
  end

  it 'has many questions' do
    expect(questionnaire.questions.length).to eq(2)
  end

  it 'has many users through user_responses' do
    expect(questionnaire.users).to be_truthy
  end

  it 'has an admin' do
    expect(questionnaire.admin).to eq(admin)
  end
end
