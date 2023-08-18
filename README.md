# Food Shared - Front-end

Food Shared is a web application that allows users to easily find information and locations to get or donate free food and other resources. It is currently local to Portland, Oregon, but will be expanded to include more locations in the future. It includes a map and an associated directory of public pantries, free fridges, hot meals, and other accessible food assistance. 
While food banks and state-affiliated food assistance programs are crucial resources for people experiencing food insecurity, they present barriers in many cases. Community-centered and mutual aid resources with low barriers to access are prioritized. Many are accessible in ways that state-affiliated resources may not be. The resources will be regularly added to and updated. 

## Dependencies 
This project uses the MERN techstack with RESTful API routes with React on the front-end and Express.js in the back-end. 

See the dependencies below: 
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
 * react-mapbox-gl-geocoder
 * react-mapbox-geocoder
 * react-router
 * react-router-dom
 * yarn

## Installation
1. Git clone the repository
2. Install dependencies by running `yarn add` (install yarn if you don't have it already, or if you prefer npm use `npm install`)
3. Create a  .env file on the root directory and add the variable:
    -   ```REACT_APP_MAPBOX_ACCESS_TOKEN=YOURMAPBOXACCESSTOKEN```
4. Run the server with:
    -   ```yarn start```

You will also need to install the back-end repository to fully test development. 

  
## Forthcoming and Future Enhancements... 
 - Finish the admin admin panel to moderate user submissions
 - Implement filters for the directory/map
 - Improve zip code search and radius options
 - Registration for users who help run or organize resources
 - Implement a voluntary user survey to collect and present useful data
 - Use data to show which areas are most searched and  what types of foods/resources are most sought out?
 - Incorporate info for folks wanting to donate or volunteer time, i.e., community and personal gardeners with surplus food
 - Expand beyond Portland




https://github.com/erinaperez/front-end-FS/assets/111480454/48f6a183-35cf-4f3e-9925-b99a425e7e0c

