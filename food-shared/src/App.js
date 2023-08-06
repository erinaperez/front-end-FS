import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import HomePage from "./pages/HomePage";
import AddResourcePage from "./pages/AddResourcePage";
import AboutPage from "./pages/AboutPage";
import Map from "./components/Map";
import ResourceDirectory from "./components/ResourceDirectory";
import AddResource from "./components/AddResource";
import About from "./components/About";

const App = () => {
  // State to store resources and selected resource
  const [resources, setResources] = useState([]);
  const [selectedResource, setSelectedResource] = useState(null);

  // Get  resources
  useEffect(() => {
    const getResources = async () => {
      try {
        const response = await axios.get('/api/resources'); // TODO: replace api/resources with correct endpoint
        setResources(response.data);
      } catch (error) {
        console.log("Error getting resources", error);
      }
    };
    getResources();
  }, []);

  // Get selected resource
  useEffect(() => {
    const getSelectedResource = async () => {
      if (selectedResource) {
        try {
          const response = await axios.get('/api/resources/' + selectedResource._id);
          setSelectedResource(response.data);
        } catch (error) {
          console.log("Error getting selected resource", error);
        }
      }
    };
    getSelectedResource();
  }, [selectedResource]);

  return (
    <Router>
      <div>
        {/* Define nav links */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/add-resource-page' element={<AddResourcePage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
        {/* Map and Directory maybe don't need their own links? They will live on Homepage */}
        <Map 
          resources={resources} 
          selectedResource={selectedResource} 
          setSelectedResource={setSelectedResource} />
        <ResourceDirectory
          resources={resources}
          selectedResource={selectedResource}
          setSelectedResource={setSelectedResource} />
      </div>
    </Router>
  );
};

export default App;



// Get resources from MongoDB Atlas using axios and useEffect and update state with setResources
//   useEffect(() => {
//     axios.get('/api/resources')
//       .then(response => {
//         setResources(response.data);
//       })
//       .catch(error => {
//         console.log(error);
//     });
//   }, []);

//   // Get selected resource from MongoDB Atlas using axios and useEffect and update state with setSelectedResource
//   useEffect(() => {
//     if (selectedResource) {
//       axios.get('/api/resources/' + selectedResource._id)
//         .then(response => {
//           setSelectedResource(response.data);
//         })
//         .catch(error => {
//           console.log(error);
//       });
//     };
//   }, [selectedResource]);

