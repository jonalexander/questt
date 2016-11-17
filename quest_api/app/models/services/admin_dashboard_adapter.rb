require 'pry'
module Services
  class AdminDashboardAdapter

    def initialize(admin)
      @admin = admin
    end

    def format_response
      # response is object to be return and formatted as JSON for Admin#show endpoint
      response = {
        admin: @admin,
        questionnaires: []
      }
      # utilized a namespacing convention using _obj to indicate a key with a corresponding active record object
      # chose this route rather than converting the object to a hash as it would eventually be formatted as a json hash
      # in the controller.

      # if @admin has questionnaires, add them to array in response
      if @admin.questionnaires
        @admin.questionnaires.each_with_index do |questionnaire, questionnaire_index|
          response[:questionnaires] << {questionnaire_obj: questionnaire}

          if questionnaire.users
          ### include questionnaire's users and their user_responses IF it has users
              response[:questionnaires][questionnaire_index][:users] = []

              questionnaire.users.uniq.each_with_index do |user, user_index|
                response[:questionnaires][questionnaire_index][:users] << {user_obj: user}

                response[:questionnaires][questionnaire_index][:users][user_index][:user_responses] = []

                # add each user's user response to their :user_response array -- UR must have questionnaire ID
                user.user_responses.each do |user_response, ur_index|
                  if user_response.questionnaire_id == questionnaire.id && user_response.user_id == user.id
                    response[:questionnaires][questionnaire_index][:users][user_index][:user_responses] << {user_response_obj: user_response}
                  end # if
                end # end user_responses
              end # end users
            end # if

          ### include questionnaire's questions
          response[:questionnaires][questionnaire_index][:questions] = []

          questionnaire.questions.each_with_index do |question|
            response[:questionnaires][questionnaire_index][:questions] << question
          end
        end # end @admin
      end # if statement
      ######
      return response
    end
  end
end
