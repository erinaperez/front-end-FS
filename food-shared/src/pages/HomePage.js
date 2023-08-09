import React, { useEffect, useState } from "react";
import ResourceMap from "../components/ResourceMap";
import ResourceDirectory from "../components/ResourceDirectory";
import { getResourcesByZip } from "../api";

const HomePage = () => {
  const [zipCode, setZipCode] = useState('');
  const [resources, setResources] = useState([]);
  const [selectedResource, setSelectedResource] = useState(null);

  useEffect(() => {
    if (zipCode) {
      getResourcesByZip(zipCode)
        .then((data) => setResources(data))
        .catch((error) => console.error(error));
    }
  }, [zipCode]);

  const handleZipCodeChange = (event) => {
    setZipCode(event.target.value);
  };

  const handleMarkerClick = (resource) => {
    setSelectedResource(resource);
  };

  const handleClosePopup = () => {
    setSelectedResource(null);
  };

  return (
    <div className="HomePage">
      <h1>Welcome to Food Shared</h1>
        <span>Food Shared is a resource directory for users to find food pantries, free fridges, etc.</span>
        <p>Enter your zip code to find resources near you:</p>      
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter your zip code"
          value={zipCode}
          // onChange={(event) => setZipCode(event.target.value)} />
          onChange={handleZipCodeChange} 
          />
          <button onClick={() => setZipCode("")}>Enter</button>       
      </div>
      <div className="content">
        <ResourceMap
          resources={resources}
          selectedResource={selectedResource}
          onMarkerClick={handleMarkerClick}
          onClose={handleClosePopup}
        />
        <ResourceDirectory resources={resources} selectedResource={selectedResource} />
      </div>
    </div>
  );
};

export default HomePage;



//   return (
//     <>
//     <div className="HomePage">
      // <h1>Welcome to Food Shared</h1>
      // <p>Food Shared is a resource directory for users to find food pantries, free fridges, etc., etc. .</p>
      // <p>Enter your zip code to find resources near you!</p>
      // <input
      //   type="text"
      //   placeholder="Enter your zip code"
      //   value={zipCode}
      //   onChange={(event) => setZipCode(event.target.value)} />
      // <button onClick={() => setZipCode("")}>Clear</button>
//     </div>
//     <Map resources={resources} /><ResourceDirectory resources={resources} /></>
//   );
// };

// export default HomePage;