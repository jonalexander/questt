require "rails_helper"

RSpec.describe Api::V1::UsersController, type: :routing do
  User.destroy_all
  describe "routing" do

    it "routes to #index" do
      expect(:get => "api/v1/users").to route_to("api/v1/users#index")
    end
    ##does not work yet
    it "routes to #show" do
      expect(:get => "api/v1/users/user@user&com").to route_to("api/v1/users#show")
    end

    it "routes to #create" do
      expect(:post => "/api/v1/users").to route_to("api/v1/users#create")
    end

  end
end
