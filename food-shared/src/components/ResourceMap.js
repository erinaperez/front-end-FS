import React, { useEffect, useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import axios from "axios";

// User enters zip code
// Zip code is passed to backend
// Backend gets latitude and longitude of that zip code and 10 mi radius? (radius is stretch goal)
// To do this, make API call using Mapbox Geocoding API for geolocation basesd on zip.
// Backend queries the database for resources within 10 mi of that zip code (using the lat/long coords)
// Backend returns resources within radius, send to frontend
// Frontend displays resources on map and in directory

// https://docs.mongodb.com/manual/tutorial/geospatial-tutorial/
// https://docs.mongodb.com/manual/tutorial/calculate-distances-using-spherical-geometry-with-2d-geospatial-indexes/

const ResourceMap = ({ zipCode }) => {
  // Initial viewport state
  const [viewport, setViewport] = useState({
    latitude: 37.7749,
    longitude: -122.4194,
    width: "100%",
    height: "100%",
    zoom: 10, // adjust zoom level
    mapStyle: "mapbox://styles/mapbox/streets-v11",
  });

  const [resources, setResources] = useState([]);
  const [selectedResource, setSelectedResource] = useState(null);

  // Get lat and long of zip code using Mapbox Geocoding API
  useEffect(() => {
    axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${zipCode}.json`,{
      params: {
        access_token: process.env.REACT_APP_MAPBOX_TOKEN,
      },
    })
    .then((response) => {
      const [longitude, latitude] = response.data.features[0].center;

      // Get resources within 10 mi of zip code
      axios.get(`/api/resources?latitude=${latitude}&longitude=${longitude}&radius=10`)
        .then((response) => {
          setResources(response.data);
        })
        .catch((error) => {
          console.error("Error fetching resources:", error);
        });
    
      // Update viewport to center on zip code
      setViewport({
        ...viewport,
        latitude,
        longitude,
      });
    })
    .catch((error) => {
      console.error("Error fetching coordinates:", error);
    });
  }, [zipCode]);

  // Handle marker click
  const handleMarkerClick = (resource) => {
    setSelectedResource(resource);
  };

  // Handle popup close
  const handleClosePopup = () => {
    setSelectedResource(null);
  };

  return (
    <Map {...viewport} onViewportChange={setViewport}>
      {/* Markers */}
      {resources.map((resource) => (
        <Marker
          key={resource._id}
          latitude={resource.latitude}
          longitude={resource.longitude}
          onClick={() => handleMarkerClick(resource)}
        >
          {/* Marker Content */}
          <button className="marker-btn">
            <img src="/marker.png" alt="marker" /> {/* replace with marker image */}
          </button>
        </Marker>
      ))}
      {/* Popup for selected resource */}
      {selectedResource && (
        <Popup
          latitude={selectedResource.latitude}
          longitude={selectedResource.longitude}
          onClose={handleClosePopup}
        >
          <div className="map-popup"> {/* style popup */}
            <h3>{selectedResource.name}</h3>
            <p>{selectedResource.address}</p>
            <p>{selectedResource.operatingHours}</p>
            {/* add any other resource details to show in marker view */}
          </div>
        </Popup>
      )}
    </Map>
  );
};

export default ResourceMap;



// Backup -- Aug 8 5:15pm
// const ResourceMap = ({ resources, selectedResource, onMarkerClick, onClose }) => {
//   // Initialize viewport state
//   const [viewport, setViewport] = useState({
//     latitude: 37.7749,
//     longitude: -122.4194,
//     width: "100%",
//     height: "100%",
//     zoom: 10, // adjust zoom level
//   });

//   return (
//     <Map {...viewport} onViewportChange={setViewport}>
//       mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
//       {resources.map((resource) => (
//         <Marker
//           key={resource._id}
//           latitude={resource.latitude}
//           longitude={resource.longitude}
//           onClick={() => onMarkerClick(resource)}
//         >
//           <button
//             className="marker-btn"
//             onClick={(event) => {
//               event.preventDefault();
//               selectedResource(resource);
//             }}
//           >
//             <img src="/marker.png" alt="marker" /> {/* replace with marker image */}
//           </button>
//         </Marker>
//       ))}
//       {/* Popup for selected resource */}
//       {selectedResource && (
//         <Popup
//           latitude={selectedResource.latitude}
//           longitude={selectedResource.longitude}
//           onClose={onClose}
//         >
//           <div className="map-popup"> {/* style popup in style.css */}
//             <h3>{selectedResource.name}</h3>
//             <p>{selectedResource.address}</p>
//             <p>{selectedResource.operatingHours}</p>
//             {/* add any other resource details to show in marker view */}
//           </div>
//         </Popup>
//       )}
//     </Map>
//   );
// };

// export default ResourceMap;










// PFFFST IDK ANYMORE
// const Map = () => {
//   const [viewport, setViewport] = useState({
//     latitude: 37.7749,
//     longitude: -122.4194,
//     width: "100%",
//     height: "100%",
//     zoom: 10, // adjust zoom level
//   });

//   const [resources, setResources] = useState([]);
//   const [selectedResource, setSelectedResource] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("/api/resources");
//         setResources(response.data);
//       } catch (error) {
//         console.error('Error fetching resources:', error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Resource Map and Directory</h1>
//       <ReactMapGL
//         {...viewport}
//         mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
//         onViewportChange={(newViewport) => setViewport(newViewport)}
//         >
//         {resources.map((resource) => (
//           <Marker
//             key={resource._id}
//             latitude={resource.latitude}
//             longitude={resource.longitude}
//           >
//             <button
//               className="marker-btn"
//               onClick={(event) => {
//                 event.preventDefault();
//                 setSelectedResource(resource);
//               }}
//             >
//               <img src="/marker.png" alt="marker" /> {/* replace with marker image */}
//             </button>
//           </Marker>
//         ))}
//         {/* Popup for selected resource */}
//         {selectedResource && (
//           <Popup
//             latitude={selectedResource.latitude}
//             longitude={selectedResource.longitude}
//             onClose={() => setSelectedResource(null)}
//           >
//             <div>
//               <h3>{selectedResource.name}</h3>
//               <p>{selectedResource.address}</p>
//               {/* add any other resource details to show in marker view */}
//             </div>
//           </Popup>
// export default Map;
//         )}
//       </ReactMapGL>
//     </div>
//   );
// };
