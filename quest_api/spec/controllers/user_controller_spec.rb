require 'spec_helper'
require 'pry'
require 'rails-controller-testing'

RSpec.describe Api::V1::UsersController, type: :controller do

    # clean up
    User.destroy_all
    user = User.create(email: 'user2@user.com', name: 'user2', password: 'user2')

    # no authentication or session info for this application
    let!(:valid_attributes) {
      {name: 'user2', email: 'user2@user.com', password: 'user2'}
    }

    let!(:invalid_attributes) {
      {name: 'user'}
    }

    describe "GET #show" do
      it "assigns the requested user" do
        user = User.create! valid_attributes
        get :show, params: {id: user.email}
        expect(assigns(user)).to eq(user)
      end
    end


end
