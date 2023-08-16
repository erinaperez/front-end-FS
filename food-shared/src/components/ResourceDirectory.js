import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";

const ResourceDirectory = () => {
  const [resources, setResources] = useState([]);
  const [selectedResource, setSelectedResource] = useState(null);

  useEffect(() => {
    const getResources = async () => {
      try {
        const response = await axios.get("http://localhost:5000/resources");
        setResources(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("Error getting all resources", error);
      }
    };
    getResources();
  }, []);

  const handleResourceClick = useCallback((resource) => {
    setSelectedResource(resource);
  }, []);

  return (
    <div className="resource-directory">
      <h2>Resource Directory</h2>
      <ul className="list-group list-group-flush">
        {resources.map((resource) => (
          <li className="list-group-item" key={resource._id} onClick={() => handleResourceClick(selectedResource)}>
            <h3>{resource.name}</h3>
            <p>Address: {resource.address}</p>
            <p>Type: {resource.typeOfResource}</p>
            <p>Hours: {resource.operatingHours}</p>
            <p>Affiliation: {resource.affiliation}</p>
            <p>Indoors or Outdoors: {resource.indoorsOrOutdoors}</p>
            <p>Accessibility: {resource.accessibility}</p>
            <p>Other notes: {resource.notes}</p>
            {/* <p>{resource.lastUpdated}</p> */}
            <p>Contact: {resource.contact}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResourceDirectory;


// const ResourceDirectory = () => {

//   // State to store resources and selected resource
//   const [resources, setResources] = useState([]);
//   const [selectedResource, setSelectedResource] = useState(null);

//   // Get all resources from backend on page load
//   useEffect(() => {  
//     const getResources = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/resources");
//         setResources(response.data);
//         console.log(response.data);
//       } catch (error) {
//         console.log("Error getting all resources", error);
//       }
//     }
//   getResources();
//   }, [selectedResource]);

//   // Get selected resource
//   useEffect((selectedResource) => {
//     const getSelectedResource = async () => {
//       if (selectedResource) {
//         try {
//           const response = await axios.get('http://localhost:5000/' + selectedResource._id);
//           setSelectedResource([response.data]);
//         } catch (error) {
//           console.log("Error getting selected resource", error);
//         }
//       }
//     };
//     getSelectedResource();
//   }, []);

//   return (
//     <div className="resource-directory">
//       <h2>Resource Directory</h2>
//       <ul>
//         {resources.map(resource => (
//           <li key={resource._id} onClick={() => setSelectedResource(resource)}>
//               <p>{resource.name}</p>
//               <p>Address: {resource.address}</p>
//               <p>Type: {resource.typeOfResource}</p>
//               <p>Hours: {resource.operatingHours}</p>
//               <p>Affiliation: {resource.affiliation}</p>
//               <p>Indoors or Outdoors: {resource.indoorsOrOutdoors}</p>
//               <p>Accessibility: {resource.accessibility}</p>
//               <p>Other notes: {resource.notes}</p>
//               {/* <p>{resource.lastUpdated}</p> */}
//               <p>{resource.contact}</p>
//           </li>
//           ))}
//       </ul>
//     </div>
//   );
// };

// export default ResourceDirectory;




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


  // Get resources for input zip code
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