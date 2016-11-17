module Api
  module V1
    class QuestionnairesController < ApplicationController
      before_action :set_questionnaire, only: [:show]

      def index
        @questionnaires = Questionnaire.all
        render json: @questionnaires
      end

      def show
        # service class returns block of data with nested associations as objects
        questionnaire_data = Services::QuestionnaireAdapter.new(@questionnaire)
        formatted_response = questionnaire_data.format_response

        render json: formatted_response
      end

      def create
        @questionnaire = Questionnaire.create(name: questionnaire_params['name'],
                                              admin_id: questionnaire_params['admin_id'])


        # iterate over questions and create objects
        if questionnaire_params['questions']
          @questions = questionnaire_params['questions']

          @questions.each do |key, value|
            Question.create(label: value, questionnaire_id: @questionnaire.id, order: key.to_i)
          end
        end

        @admin = Admin.find(questionnaire_params['admin_id'])
        # service class returns block of data with deep nested associations
        admin_data = Services::AdminDashboardAdapter.new(@admin)
        formatted_response = admin_data.format_response

        # return entire admin data block as front end will re-route to amdin dash
        render json: formatted_response, status: :created
      end

      private
      def set_questionnaire
        @questionnaire = Questionnaire.find(params[:id])
      end

      def questionnaire_params
        params.require(:questionnaire).tap do |whitelisted|
            # whitelist the dynamic keys in questions hash
            whitelisted[:questions] = params[:questionnaire][:questions]
        end
      end

    end
  end
end
