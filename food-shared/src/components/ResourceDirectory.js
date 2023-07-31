import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ResourceDirectory = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
      const getResources = async () => {
          try {
              const response = await axios.get('/api/food-resources');
              setResources(response.data);
          } catch (error) {
              console.log('Error getting resources:', error);
          }
      };
      getResources();
  }, []);

  return (
    <div>
      {/* Display directory */}
      {resources.map((resource) => (
        <div key={resource._id}>
          <h2>{resource.name}</h2>
          <p>{resource.address}</p>
          <p>{resource.typeOfResource}</p>
          <p>{resource.operatingHours}</p>
          <p>{resource.indoorsOrOutdoors}</p>
          <p>{resource.accessibility}</p>
          {/* Add more fields here */}
        </div>
        ))}
    </div>
  );
};

export default ResourceDirectory;