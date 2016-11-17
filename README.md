# quest
a simple questionnaire application utilizing a Rails 5 API and React + Redux.

# installation

##for the backend:
1. navigate to 'quest_api' directory (command-line)
2. run 'bundle install' to install all gems/dependencies
3. run 'bundle update'
4. run 'rails s' to boot up the server
5. run 'rake db:create'
6. run 'rake db:migrate'
7. run 'rake db:seed'

At this point you will have the database structure set up and a few sample models to work with.

##for the frontend
1. navigate to 'quest_frontend' directory (command-line)
2. run 'npm install --save' to install/save all dependencies
3. run 'npm update --save'
4. run 'npm start' to boot up your development server

##to work with user/admin flows
*Sign Up link points to '/login' for now*
1. navigate to 'http://localhost:30001' - this assumes your backend server is utilizing port:3000 and you chose to run the dev server on port:3001 when prompted. this may differ depending on your settings.
2. login as a user or admin with the following credentials:
- email: admin@admin.com, pw: admin
- email: jon@jon.com, pw: jon
3. no logout feature (yet, of course)
4. refreshing will clear the Store, navigate to '/login'
5. users can complete questionnaires
6. admins can create questionnaires and view user's answers

## testing
1. navigate to 'quest_api' directory
2. run 'rpsec'
3. enjoy. i believe there is one test failing right now. i believe the issue is within the rspec configuration i'm using.
