import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

// mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    width: "100%",
    height: "400px",
    zoom: 12, // adjust zoom level
  });

  const [resources, setResources] = useState([]);
  const [selectedResource, setSelectedResource] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/resources");
        setResources(response.data);
      } catch (error) {
        console.error('Error fetching resources:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <ReactMapGL
        {...viewport}
        onViewportChange={(viewport) => setViewport(viewport)}
        mapboxAPIAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        >
        {resources.map((resource) => (
          <Marker
            key={resource._id}
            latitude={resource.latitude}
            longitude={resource.longitude}
          >
            {/* Add a marker icon/button here */}
          </Marker>
        ))}

        {selectedResource && (
          <Popup
            latitude={selectedResource.latitude}
            longitude={selectedResource.longitude}
            onClose={() => setSelectedResource(null)}
          >
            <div>
              <h3>{selectedResource.name}</h3>
              {/* add other resource details to show in marker view */}
            </div>
          </Popup>
        )}
      </ReactMapGL>
    </div>
  );
};

export default Map;