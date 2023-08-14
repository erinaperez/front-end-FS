import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ResourceDirectory = () => {

  // State to store resources and selected resource
  const [resources, setResources] = useState([]);
  const [selectedResource, setSelectedResource] = useState(null);

  // Get all resources from backend on page load
  useEffect(() => {  
    const getResources = async () => {
      try {
        const response = await axios.get("http://localhost:5000/resources");
        setResources(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("Error getting all resources", error);
      }
    }
  getResources();
  }, []);

  // // Get resources for input zip code
  // useEffect(() => {
  //   const getResourcesByZip = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:5000/getInZipCode');
  //       setResources(response.data);
  //     } catch (error) {
  //       console.log("Error getting zipcode resources", error);
  //     }
  //   };
  //   getResourcesByZip(zipCode);
  // }, [zipCode]);


  // Get selected resource
  useEffect(() => {
    const getSelectedResource = async () => {
      if (selectedResource) {
        try {
          const response = await axios.get('http://localhost:5000/' + selectedResource._id);
          setSelectedResource([response.data]);
        } catch (error) {
          console.log("Error getting selected resource", error);
        }
      }
    };
    getSelectedResource();
  }, []);

  return (
    <div className="resource-directory">
      <h2>Resource Directory</h2>
      <ul>
        {resources.map(resource => (
          <li key={resource._id}>
            <p>{resource.name}</p>
            <p>{resource.address}</p>
            <p>{resource.typeOfResource}</p>
            <p>{resource.operatingHours}</p>
            <p>{resource.affiliation}</p>
            <p>{resource.indoorsOrOutdoors}</p>
            <p>{resource.accessibility}</p>
            <p>{resource.notes}</p>
            <p>{resource.lastUpdated}</p>
            <p>{resource.contact}</p>
          </li>
          ))}
      </ul>
    </div>
  );
};

export default ResourceDirectory;

 // const objectTest = {
  //   "_id": {
  //     "$oid": "64cec79da2fd7672c2f20d66"
  //   },
  //   "name": "Brentwood Mini Fridge & Pantry",
  //   "address": "6242 SE Duke St, Portland, OR 97206",
  //   "typeOfResource": "Mini fridge and pantry",
  //   "affiliation": "Residential",
  //   "operatingHours": "Open access",
  //   "indoorsOrOutdoors": "Outdoors",
  //   "accessibility": "Three stairs required for access",
  //   "lastUpdated": "08/04/3300",
  //   "contact": "",
  //   "notes": "None"
  // };