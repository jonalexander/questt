require 'pry'
module Services
  class UserDashboardAdapter

    def initialize(user)
      @user = user
    end

    def format_response
      response = {
        user: @user,
        questionnaires: []
      }

      # populate questionnaires array if @user has questionnaires
      if @user.questionnaires

        @user.questionnaires.each_with_index do |questionnaire, quest_index|

          # create new hash to store the active record object allowing us to write more data to it
          new_questionnaire = {questionnaire_obj: questionnaire}

          # add the questionnaire hash to the array of user's questionnaires they have taken
          response[:questionnaires] << new_questionnaire

          # define an empty array within the questionnaire hash to store its user_responses
          response[:questionnaires][quest_index][:user_responses] = []

          # iterate over the questionnaire's user_responses and store them in the array
          questionnaire.user_responses.each_with_index do |user_response, ur_index|

            # only add user_responses for current user_responses
            if user_response.user_id == @user.id
              response[:questionnaires][quest_index][:user_responses] << user_response
            end
          end
        end
      end # if statement

      return response
    end

  end
end
