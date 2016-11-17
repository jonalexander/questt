require 'rails_helper'
require 'spec_helper'
require 'rails-controller-testing'
require 'pry'

RSpec.describe Api::V1::QuestionnairesController, type: :controller do

  # clean up
  Admin.destroy_all
  Questionnaire.destroy_all

  # no authentication or session info for this application
  let!(:admin) {
    Admin.create(name: 'admin', email: 'admin@aol.com', password: 'pw')
  }

  let!(:questionnaire) {
    Questionnaire.create(name: 'Sports', admin_id: admin.id)
  }

  let!(:valid_attributes) {
    {name: 'sports', admin_id: admin.id}
  }

  let!(:invalid_attributes) {
    {name: 'sports'}
  }

  let!(:valid_admin_attributes) {
    {name: 'admin', email: 'admin@admin.com', password: 'pw'}
  }


  describe "GET #index" do
    it "returns all questionnaires" do
      get :index
      expect(assigns(:questionnaires)).to eq([questionnaire])
    end
  end

  describe "GET #show" do
    it "assigns the requested questionnaire as @questionnaire" do
      get :show, params: {id: questionnaire.to_param}
      expect(assigns(:questionnaire)).to eq(questionnaire)
    end
  end

  describe "POST #create" do
    context "with valid params" do
      it "creates and persists new questionnaire" do
        expect {
          post :create, params: {questionnaire: {name: 'basketball', admin_id: admin.id, questions: {} }}
        }.to change(Questionnaire, :count).by(1)
      end

      it "assigns a newly created questionnaire as @questionnaire" do
        post :create, params: {questionnaire: valid_attributes}
        expect(assigns(:questionnaire)).to be_a(Questionnaire)
        expect(assigns(:questionnaire)).to be_persisted
      end
    end

    # irrelevant to my controller. doesn't accept invalid params right now.
    # context "with invalid params" do
    #   it "assigns a new questionnaire but does not persist" do
    #     post :create, params: {questionnaire: {name: 'basketball', questions: {} }}
    #     expect(assigns(:questionnaire)).to be_a_new(Questionnaire)
    #   end
    # end
  end

end
