# pharmaceutical-informatics

# Getting Started

# Server
 on root folder please run "yarn" or npm install (preferrablly yarn)
 starting the server on any port please update the .env file to include your port (default is 4000 if no port was specified)
 to start server node app OR nodemon app (if nodemon is installed globally)

Client side can be server side rendered by opening the client directory and make a static public files build using (yarn build on the react app)
 serving static frontend files is handled in the server application using a middleware

 open https://localhost:3001 or specified port in your browser.

## GraphQL (Express)
 To test queries and/or mutations (API Docs) , please use graphiql (enabled by default) at localhost://{{ PORT NUBMER}}/graphql

Cancel changes

# Client (crafted using react native application which works on web as well by using react-native-web library/ shared folder is a system link inside /web directory from outter scope dir)

 To run web locally 
 cd client && cd web && yarn start then open localhost:1234

# to run mobile app:
cd client && pod install (IOS Only) && yarn ios/android (make sure you have react native development environment setup) https://reactnative.dev/docs/environment-setup

# Usage
Search for any term to retrieve drug information , you can search by drug name/description and list of diseases that the drug induce

## testing

# Server GraphQL tests are under app.test.js
running using node test (make sure server is running)


## Troubleshoot.

Shared on web must be linked if it doesn't exist under web directory using system link
Make sure you are on /web directory and add the following command
ln -s /Users/{system username}/path to repo/client/shared
