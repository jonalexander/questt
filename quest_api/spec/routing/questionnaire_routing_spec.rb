require "rails_helper"

RSpec.describe Api::V1::QuestionnairesController, type: :routing do
  Questionnaire.destroy_all
  describe "routing" do

    it "routes to #index" do
      expect(:get => "api/v1/questionnaires").to route_to("api/v1/questionnaires#index")
    end

    it "routes to #show" do
      expect(:get => "api/v1/questionnaires/1").to route_to("api/v1/questionnaires#show", :id => "1")
    end

    it "routes to #create" do
      expect(:post => "/api/v1/questionnaires").to route_to("api/v1/questionnaires#create")
    end

  end
end
