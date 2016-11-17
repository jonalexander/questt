require 'pry'
module Api
  module V1
    class AdminsController < ApplicationController
      # before_action :set_admin, only: [:show]

      # /admins/EMAILSTRINGe
      def show
        clean_email = params["email"].split("&").join(".")
        @admin = Admin.find_by(email: clean_email)
        # service class returns block of data with deep nested associations
        admin_data = Services::AdminDashboardAdapter.new(@admin)
        formatted_response = admin_data.format_response

        render json: formatted_response
      end


      def create
        @admin = Admin.new(admin_params)

        if @admin.save
          render json: @admin, status: :created
        else
          render json: @admin.errors, status: :unprocessable_entity
        end
      end


      private

      # automatically find the instance of User we need
      def set_admin
        @admin = Admin.find(params[:id])
      end

      # ensure that we only allow legitimate parameters upon creation
      def admin_params
        params.require(:admin).permit(:name, :email, :password)
      end
    end
  end
end
