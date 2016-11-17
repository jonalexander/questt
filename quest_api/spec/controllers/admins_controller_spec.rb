require 'spec_helper'
require 'pry'
require 'rails-controller-testing'

RSpec.describe Api::V1::AdminsController, type: :controller do

  # clean up
  Admin.destroy_all

  # no authentication or session info for this application
  let!(:valid_attributes) {
    {name: 'admin', email: 'admin@admin.com', password: 'pw'}
  }

  let!(:invalid_attributes) {
    {name: 'admin'}
  }

  describe "GET #show" do
    it "assigns the requested admin as @admin" do
      admin = Admin.create! valid_attributes
      get :show, params: {email: 'admin@admin.com'}
      expect(assigns(:admin)).to eq(admin)
    end
  end

  describe "POST #create" do
    context "with valid params" do
      it "creates and persists new admin" do
        expect {
          post :create, params: {admin: valid_attributes}
        }.to change(Admin, :count).by(1)
      end

      it "assigns a newly created admin as @admin" do
        post :create, params: {admin: valid_attributes}
        expect(assigns(:admin)).to be_a(Admin)
        expect(assigns(:admin)).to be_persisted
      end
    end

    # will be performing validation of data input on frontend
    # before hitting the controllers
    context "with invalid params" do
      it "assigns a new admin but does not persist" do
        post :create, params: {admin: invalid_attributes}
        expect(assigns(:admin)).to be_a_new(Admin)
      end

    end
  end

end
