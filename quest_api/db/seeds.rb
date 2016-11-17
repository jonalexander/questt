
admin = Admin.create(name: 'admin', email: 'admin@admin.com', password: 'admin')
user1 = User.create(name: 'jon', email: 'jon@jon.com', password: 'jon')

sports = admin.questionnaires.build(name: 'sports')
sports.save

question1 = sports.questions.build(label: 'what is your favorite sport?', order: 0)
question1.save
question2 = sports.questions.build(label: 'who is your favorite athlete?', order: 1)
question2.save

user_response1 = user1.user_responses.build(questionnaire_id: sports.id, question_id: question1.id, value: 'baseball')
user_response1.save

user_response2 = user1.user_responses.build(questionnaire_id: sports.id, question_id: question2.id, value: 'griffey')
user_response2.save
