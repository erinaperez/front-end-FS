import React, { useEffect, useState } from 'react';
import ResourceMap from './ResourceMap';
import axios from 'axios';

const ResourceDirectory = () => {
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
    <div className="resource-directory">
      <h2>Resource Directory</h2>
      <ul>
        {resources.map((resource) => (
          <li key={resource._id}>
            <h3>{resource.name}</h3>
            <p>{resource.address}</p>
            <p>{resource.typeOfResource}</p>
            <p>{resource.operatingHours}</p>
            <p>{resource.affiliation}</p>
            <p>{resource.indoorsOrOutdoors}</p>
            <p>{resource.accessibility}</p>
            <p>{resource.lastUpdated}</p>
            {/* Add more fields here */}
          </li>
          ))}
      </ul>
    </div>
  );
};

export default ResourceDirectory;



{/* import React from "react";

const ResourceDirectory = ({ resources, selectedResource }) => {
  return (
    <div className="resource-directory">
      <h2>Resource Directory</h2>
      <ul>
        {resources.map((resource) => (
          <li 
            key={resource._id} 
            className={resource === selectedResource ? "selected" : ""}
            >
            <h3>{resource.name}</h3>
            <p>{resource.address}</p>
            <p>{resource.typeOfResource}</p>
            <p>{resource.operatingHours}</p>
            <p>{resource.affiliation}</p>
            <p>{resource.indoorsOrOutdoors}</p>
            <p>{resource.accessibility}</p>
            <p>{resource.lastUpdated}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}; */}