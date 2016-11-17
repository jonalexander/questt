// displayQuestions() {
//   var questions = this.props.questions
//   var counter = 0
//
//   var questionsOutput = questions.map( (question) => {
//     return(
//       <div key={counter++}>
//         <h2> {question.label} </h2>
//       </div>
//     )
//   })
//   return questionsOutput
// }
//
//
// hobbies = admin.questionnaires.build(name: 'hobbies')
// hobbies.save
//
// question3 = hobbies.questions.build(label: 'favorite hobby?', order: 0)
// question3.save
// question4 = hobbies.questions.build(label: 'do you like ceramics?', order: 1)
// question4.save
//
// user_response3 = user1.user_responses.build(questionnaire_id: hobbies.id, question_id: question3.id, value: 'basket weaving')
// user_response3.save
// user_response4 = user1.user_responses.build(questionnaire_id: hobbies.id, question_id: question4.id, value: 'yes')
// user_response4.save
//
// user_response5 = user2.user_responses.build(questionnaire_id: hobbies.id, question_id: question3.id, value: 'ping pong')
// user_response5.save
// user_response6 = user2.user_responses.build(questionnaire_id: hobbies.id, question_id: question4.id, value: 'nope')
// user_response6.save
