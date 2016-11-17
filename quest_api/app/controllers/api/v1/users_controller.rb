require 'pry'
module Api
  module V1
    class UsersController < ApplicationController

      def show
        clean_email = params["id"].split("&").join(".")
        @user = User.find_by(email: clean_email)

        binding.pry
        # service class returns block of data with deep nested associations
        # will use this data to show user's their previous answers in the future
        user_data = Services::UserDashboardAdapter.new(@user)
        formatted_response = user_data.format_response

        render json: formatted_response
      end

      def create
        binding.pry
        clean_email = params["id"].split("&").join(".")
        @user = User.find_by(email: clean_email)

        if @user.save
          render json: @user, status: :created, location: @user
        else
          render json: @user.errors, status: :unprocessable_entity
        end
      end


      private

      # ensure that we only allow legitimate parameters
      def user_params
        params.require(:user).permit(:name, :email, :password)
      end

    end
  end
end
