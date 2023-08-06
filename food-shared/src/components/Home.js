// import React, { useState, useEffect } from "react";
// import Map from "./Map";
// import ResourceDirectory from "./ResourceDirectory";

// function Home() {
//   const [zipCode, setZipCode] = useState("");
//   const [resources, setResources] = useState([]);

//   // Get resources based on zipCode from MongoDB Atlas using axios
//   // Create API endpoint in backend like axios.get('/api/resources/?zipCode=' + zipCode)
//   // Update resources state with response from backend
//   useEffect(() => {
//     axios.get('/api/resources/?zipCode=' + zipCode)
//       .then(response => {
//         setResources(response.data);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }, [zipCode]);

//   return (
//     <><div>
//       <h1>Welcome to Food Shared!</h1>
//       <p>Food Shared is a resource directory for users to find food pantries, free fridges, etc., etc. .</p>
//       <p>Enter your zip code to find resources near you!</p>
//       <input
//         type="text"
//         placeholder="Enter your zip code"
//         value={zipCode}
//         onChange={(event) => setZipCode(event.target.value)} />
//       <button onClick={() => setZipCode("")}>Clear</button>
//     </div><Map resources={resources} /><ResourceDirectory resources={resources} /></>
//   );
// };

// export default Home;