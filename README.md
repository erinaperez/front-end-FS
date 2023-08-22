# Food Shared - Frontend

Food Shared is a web application that helps users easily find free food and other resources. It addresses the concern that although food banks and state-affiliated food assistance programs are crucial resources for millions experiencing food insecurity, these institutions present significant barriers for some individuals and families. The Food Shared directory highlights community-centered and mutual aid-driven resources with low barriers to access, including public pantries, community fridges, hot meals, and other accessible food assistance. Resources are accessible in ways that government and state-affiliated resources often are not or cannot be. 

The directory is local to Portland, Oregon, but it will be expanded to include more locations in the future and it will be updated regularly. 

## Dependencies 
This project uses the MERN techstack with RESTful API routes, React for frontend and Express.js for backend. 

Frontend dependencies include: 
 * axios
 * jest testing library
 * babel
 * dovenv
 * mapbox
 * mapbox-gl
 * react
 * react-bootstrap
 * react-dom
 * react-map-gl
 * react-map-gl-geocoder
 * react-mapbox-geocoder
 * react-router
 * react-router-dom
 * yarn

## Installation
1. Git clone the repository
2. Install the dependencies by running `yarn add` (install yarn if you don't have it already, or if you prefer npm use `npm install`)
3. Create a  .env file on the root directory and add the variable:
    -   ```REACT_APP_MAPBOX_ACCESS_TOKEN=YOURMAPBOXACCESSTOKEN```
4. Replace YOURMAPBOXACCESSTOKEN with your own access Mapbox access token.
5. Run the server with:
    -   ```yarn start```

You will need to install the backend repository to fully test development. 

## Forthcoming and Future Enhancements... 
 - Expand beyond Portland
 - Complete the admin admin panel to moderate user submissions
 - Deploy frontend and backend
 - Add testing to ensure comprehensive code coverage
 - Implement filters for the directory/map
 - Improve zip code search and radius options
 - Registration for users who run or organize resources
 - Add a voluntary user survey to collect and present useful data
 - Use data to show most frequently searched areas and most sought types of foods/resources
 - Incorporate information on donating items or volunteering time



Input and feedback is welcome!

https://github.com/erinaperez/front-end-FS/assets/111480454/48f6a183-35cf-4f3e-9925-b99a425e7e0c
