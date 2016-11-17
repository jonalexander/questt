require 'pry'
module Services
  class QuestionnaireAdapter

    def initialize(questionnaire)
      @questionnaire = questionnaire
    end

    def format_response
      response = {
        questionnaire: @questionnaire,
        questions: []
      }

      @questionnaire.questions.each do |question|
        response[:questions] << question
      end

      return response
    end
    ###
  end
end
