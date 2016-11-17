require "rails_helper"

RSpec.describe Api::V1::AdminsController, type: :routing do
  Admin.destroy_all
  admin = Admin.create(name: 'admin', email: 'admin2@admin.com', password: 'admin')

  describe "routing" do

    it "routes to #show" do
      expect(:get => "api/v1/admins/admin2@admin&com").to route_to("api/v1/admins#show", :email => "admin2@admin&com")
    end

    it "routes to #create" do
      expect(:post => "/api/v1/admins").to route_to("api/v1/admins#create")
    end

  end
end
