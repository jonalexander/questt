module Api
  module V1
    class UserResponsesController < ApplicationController
      before_action :set_user_response, only: [:show, :update, :destroy]

      def index
        @user_responses = UserResponses.all
        render json: @user_responses
      end

      def show
        render json: @user_response
      end

      def create
        # iterate over objects in params and create user_response objects
        user_response_params.each do |user_response|
          UserResponse.create(value: user_response["value"],
                              question_id: user_response["question_id"].to_i,
                              questionnaire_id:user_response["questionnaire_id"],
                              user_id: user_response["user_id"])
          #  {"user_id"=>1, "question_id"=>"1", "questionnaire_id"=>1, "value"=>"xx"}
        end

        render json: nil, status: :ok
      end


      private

      # automatically find the instance of User we need
      def set_user_response
        @user_response = UserResponse.find(params[:id])
      end

      # ensure that we only allow legitimate parameters
      def user_response_params
        params.require(:user_responses)
      end

    end
  end
end
