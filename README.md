# Food Shared - Front-end

Food Shared is a web application that allows users to easily find information and locations to get or donate free food and other resources. It is currently local to Portland, Oregon, but will be expanded to include more locations in the future. It includes a map and an associated directory of public pantries, free fridges, hot meals, and other accessible food assistance. 
While food banks and state-affiliated food assistance programs are crucial resources for people experiencing food insecurity, they present barriers in many cases. Community-centered and mutual aid resources with low barriers to access are prioritized. Many are accessible in ways that state-affiliated resources may not be. 

## Dependencies 
This project uses the MERN techstack with RESTful API routes and the dependencies below: 
 * node.js
 * nodemon server.js
 * Axios
 * cors
 * dovenv
 * JSON web token
 * Mongo DB atlas
 * Mongoose

## Installation
1. Git clone the repository
2. Install dependencies by running `npm install`
3. Create a MongoDB Atlas account on their site and install MongoDB Compass by running: 
    - Create a database called `Food Shared` and a collection called `resources`
5. Install MongoDB by running:
    -   ```brew tap mongodb/brew```
    -   ```brew install mongodb-community@6.0```
6. Install dependencies in the root directory:
    -   ```npm install```
7. Create a .env file on the root directory and add these variables:
    -   ```PORT = 5000```
    -   ```ATLAS_URI = mongodb+srv://YOURUSERNAME:yourpassword@cluster0.yourcluster.mongodb.net/FoodShared?retryWrites=true&w=majority```
    -   ```DB_NAME = "resources"```
    -   ```JWT_SECRET = "yourJSONToken"```
8. Run the development server with:
    -   ```npm run devStart```

You will also need to install the front-end repository to fully test development. 
  
## Forthcoming and Future Enhancements... 
     - Finish the admin admin panel to moderate user submissions
     - Implement filters for the directory/map
     - Improve zip code search and radius options
     - Registration for users who help run or organize resources
     - Implement a voluntary user survey to collect and present useful data
     - Use data to show which areas are most searched and  what types of foods/resources are most sought out?
     - Incorporate info for folks wanting to donate or volunteer time, i.e., community and personal gardeners with surplus food
     - Expand beyond Portland


