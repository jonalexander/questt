module Api
  module V1
    class QuestionsController < ApplicationController
      before_action :set_question, only: [:show, :update, :destroy]

      def index
        @questions = Question.all
        render json: @questions
      end

      def show
        render json: @question
      end

      def create
        @question = Question.new(question_params)

        if @question.save
          render json: @@question, status: :created, location: @question
        else
          render json: @question.errors, status: :unprocessable_entity
        end
      end


      private

      # automatically find the instance of User we need
      def set_question
        @question = Question.find(params[:id])
      end

      # ensure that we only allow legitimate parameters
      def question_params
        params.require(:question).permit(:name, :order, :questionnaire_id)
      end
    end
  end
end
