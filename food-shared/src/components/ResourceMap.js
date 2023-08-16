import React, { useEffect, useState, useRef, useMemo, useCallback } from "react";
import Map, { Marker, Popup, ScaleControl } from "react-map-gl";
import mapboxgl from "mapbox-gl";
import axios from "axios";

const ResourceMap = (props) => {
  const [viewport, setViewport] = useState({
    mapboxAccessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN,
    initialViewstate: {
      longitude: -122.70557,
      latitude: 45.51908, 
      zoom: 14
    },
    style:{width:'600', height:'400'},
    mapStyle: "mapbox://styles/mapbox/streets-v9"
  });

  const [resources, setResources] = useState([]);
  const [selectedResource, setSelectedResource] = useState(null);
  const [showPopup, setShowPopup] = useState(true);

  const markerRefs = useRef([]);
  
  const popups = useMemo(() => {
    return resources.map((resource) => ({
      resource,
      popup: new mapboxgl.Popup().setText(
        `${resource.name}\n${resource.address}\n${resource.operatingHours}`
        ),
      }));
    }, [resources]);
    
  const handleMarkerClick = useCallback((resource, index) => {
    markerRefs.current[index]?.togglePopup();
    const place = {...resource}
    setSelectedResource(place);
    console.log("i was clicked HANDLEMARKERCLICK", resource)
  }, []);
  
  const handleClosePopup = useCallback(() => {
    setSelectedResource(null);
    setShowPopup(false);
    console.log("i was clicked HANDLECLOSEPOPUP", selectedResource)
  }, []);
  

  // const popUplog = (resource) => {
  //   console.log("i was clicked", resource)
  // };
  
  useEffect(() => {
    axios
    .get("http://localhost:5000/resources")
      .then((response) => {
        setResources(response.data);
      })
      .catch((error) => {
        console.error("Error getting resources: ", error);
      });
  }, []);

  return (
    <div className="resource-map">
      <h2>Map</h2>
      <Map
        {...viewport}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        initialViewstate= {{
          longitude: -122.70557,
          latitude: 45.51908, 
          zoom: 14
        }}
        style={{ width: "100%", height: "600px" }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        onViewportChange={setViewport}
      >
        <ScaleControl />
        {resources.map((resource, index) => (
          <Marker
            key={resource._id}
            latitude={resource.latitude}
            longitude={resource.longitude}
            ref={(el) => (markerRefs.current[index] = el)}
            onClick={() => handleMarkerClick(resource, index)}
            color="red" 
          >
          </Marker>
        ))}
        {popups.map(({ resource, popup }, index) =>        
          selectedResource === resource ? (
            <Popup
              key={resource._id}
              latitude={resource.latitude}
              longitude={resource.longitude}
              onOpen={popup.togglePopup}
              onClose={handleClosePopup}
            >
              <div className="map-popup">
                {/* { popUplog()  } */}
                <h3>{resource.name}</h3>
                <p>{resource.address}</p>
                <p>{resource.operatingHours}</p>
                <p>Click to see more</p>
              </div>
            </Popup>
          ) : null
        )}
      </Map>
    </div>
  );
};

export default ResourceMap;





// const ResourceMap = (props) => {
//   // Initial viewport state
//   const [viewport, setViewport] = useState({
//     mapboxAccessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN,
//     style:{width:'800', height:'600'},
//     mapStyle: "mapbox://styles/mapbox/streets-v12",
//     initialViewstate: {
//       longitude: -122.70557,
//       latitude: 45.51908, 
//       zoom: 3.5
//     }
//   });

//     // Handle marker click
//     const handleMarkerClick = (resource) => {
//       setSelectedResource(resource);
//     };

//       // const marker = new mapboxgl.Marker()

//     // Handle popup close
//     const handleClosePopup = () => {
//       setSelectedResource(null);
//     };

//   const [resources, setResources] = useState([]);
//   const [selectedResource, setSelectedResource] = useState(null);

//   // Get all resources from backend on page load
//   useEffect(() => {
//     axios.get("http://localhost:5000/resources")
//       .then((response) => {
//         setResources(response.data);
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.error("Error getting resources: ", error);
//       });
//   }, []);



//   return (
//     <div className="resource-map">
//       <h2>Map</h2>
//       <Map {...viewport}  
//         mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN} 
//         initialViewstate={{
//           longitude: -122.70557,
//           latitude: 45.51908, 
//           zoom: 1
//           }} 
//         style={{width:800, height:600}} 
//         mapStyle="mapbox://styles/mapbox/streets-v12" 
//         onViewportChange={setViewport}>
//         {/* Markers */}
//         {resources.map((resource) => (
//           <Marker
//             key={resource._id}
//             latitude={resource.latitude}
//             longitude={resource.longitude}
//             onClick={() => handleMarkerClick(resource)}
//           >
//             {/* Marker Content */}
//             <button className="marker-btn">
//               <img src="assets/marker.png" alt="marker" /> 
//             </button>
//           </Marker>
//         ))}
//         {/* Popup for selected resource */}
//         {selectedResource && (
//           <Popup
//             latitude={selectedResource.latitude}
//             longitude={selectedResource.longitude}
//             onClose={handleClosePopup}
//           >
//             <div className="map-popup"> {/* style popup */}
//               <h3>{selectedResource.name}</h3>
//               <p>{selectedResource.address}</p>
//               <p>{selectedResource.operatingHours}</p>
//               <p>Click to see more info! add directory link</p>
//               {/* add any other resource details to show in marker view */}
//             </div>
//           </Popup>
//         )}
//       </Map>
//     </div>
//   );
// };

// export default ResourceMap;




// zipCode for future use:

// User enters zip code
// Zip code is passed to backend
// Backend gets latitude and longitude of that zip code and 10 mi radius? (radius is stretch goal)
// To do this, make API call using Mapbox Geocoding API for geolocation basesd on zip.
// Backend queries the database for resources within 10 mi of that zip code (using the lat/long coords)
// Backend returns resources within radius, send to frontend
// Frontend displays resources on map and in directory

// https://docs.mongodb.com/manual/tutorial/geospatial-tutorial/
// https://docs.mongodb.com/manual/tutorial/calculate-distances-using-spherical-geometry-with-2d-geospatial-indexes/


// MOVE ALL THE ZIP CODE HANDLING INTO HERE
// COMBINE THE DIRECTORY AND MAP INTO ONE COMPONENT
// REFACTOR THE DIRECTORY TO USE THE MAP COMPONENT
// Use the react-map-gl tutorial to get initial map working 

// For GeoJSON geoWithin query... should I first add a 2dsphere index to the collection?
// Or do I add the index in the query itself? Or add lat/long to each resource in the collection?
// Do I need to update each resource by creating an API call to get its lat/long?
// How did we do this in weather report? 
 // Get lat and long of zip code using Mapbox Geocoding API

  // useEffect(() => {
    // axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${zipCode}.json`, {
    //   params: {
    //     access_token: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN,
    //   },
    // })
    // .then((response) => {
    //   const [longitude, latitude] = response.data.features[0].center;
    //   console.log("longitude", longitude);
    //   // Get resources within 10 mi of zip code
    //   axios.get(`http://localhost:5000/getInZipCode/?latitude=${latitude}&longitude=${longitude}&radius=10`)
    //     .then((response) => {
    //       setResources(response.data);
    //     })
    //     .catch((error) => {
    //       console.error("Error fetching resources:", error);
    //     });
    //   // Update viewport to center on zip code
    // 
  //     setViewport({
  //       ...viewport,
  //       latitude,
  //       longitude,
  //     });
  //   })
  //   .catch((error) => {
  //     console.error("Error fetching resources:", error);
  //   });
  // }, [viewport]);




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





// useEffect(() => {
//   axios.get("http://localhost:5000/resources")
//     .then((response) => {
//       setResources(response.data);
//       console.log(response.data);
//     })
//     .catch((error) => {
//       console.error("Error getting resources: ", error);
//     });
// }, []);

// // Convert address to latitude and longitude
// useEffect(() => {
//   const getCoordinates = async () => {
//     if (resources) {
//       try {
//         const response = await axios.get(
//           `https://api.mapbox.com/geocoding/v5/mapbox.places/${resources.address}.json?access_token=${process.env.REACT_APP_ACCESS_MAPBOX_TOKEN}`
//         );
//         setResources(response.data);
//         console.log(response.data);
//       } catch (error) {
//         console.log("Error getting coordinates", error);
//       }
//     }
//   };
//   getCoordinates();
// }, []);





// useEffect(() => {
//   const getResources = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/resources");
//       const resourcesWithCoords = await Promise.all(
//         response.data.map(async (resource) => {
//           const response = await axios.get(
//             `https://api.mapbox.com/geocoding/v5/mapbox.places/${resource.address}.json?access_token=${process.env.REACT_APP_ACCESS_MAPBOX_TOKEN}`
//           );
//           const coordinates = response.data.features[0].geometry.coordinates;
//           return {
//             ...resource,
//             longitude: coordinates[0],
//             latitude: coordinates[1],
//           };
//         })
//       );
//       setResources(resourcesWithCoords);
//     } catch (error) {
//       console.error("Error getting resources: ", error);
//     }
//   };
//   getResources();
// }, []);