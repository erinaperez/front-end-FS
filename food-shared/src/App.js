import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AddResource from "./components/AddResource";
import About from "./components/About";
import ResourceMap from "./components/ResourceMap";
import ResourceDirectory from "./components/ResourceDirectory";
import Nav from "./components/Nav";
import Header from "./components/Header";
import "./style.css"

// import Map, { Marker, Popup } from "react-map-gl";

// import 'mapbox-gl/dist/mapbox-gl.css';

const App = () => {
  // State to store zip code for searching resources
  const [zipCode, setZipCode] = useState("");

  // Handler zip code input change
  const handleZipCodeChange = (event) => {
    setZipCode(event.target.value);
  };

  return (
    <Router>
      <div className="nav-container">
        <Nav />
      </div>
      <div className="app-container">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div className="home">
                <div className="home-content">
                  <h1>Welcome to Food Shared</h1>
                  <p>Find food and other no-cost resources in the directory below.</p>
                  <p>This resources directory aims to be community-centered and community-driven. The resources included here are low-barrier and most have no requirements for ID, address, or residency to access, are primarily outdoors, drop-in/drop-by friendly, community or volunteer run, offer broad ranges of open hours, and are not associated with religious or government organizations. Some offer a variety of resources beyond food items typically available at food banks, such as produce, toiletries, clothing, or homemade meals.</p>
                </div>
                <div className="add-resource-link">
                  <li><Link to="/add-resource">Add a Resource</Link></li>
                </div>
                <div className="map-container">
                  <ResourceMap />
                  <div className="zip-code-container">
                    <label htmlFor="zipCodeInput">Enter Zip Code: </label>
                    <input
                      type="text"
                      id="zipCodeInput"
                      value={zipCode}
                      onChange={handleZipCodeChange}
                      className="zip-code-input"
                    />
                  </div>
                </div>
                <div className="resource-directory-container">
                  <ResourceDirectory />
                </div>
              </div>
            }
          />
          {/* Add Resource Page */}
          <Route path="/add-resource" element={<AddResource />} />
          {/* About Page */}
          <Route path="/about" element={<About />} />
        </Routes>
      </div >
    </Router >
  );
}

export default App;





//   return (
//     <Router>
//       <div className="app-container">
//         {/* NAVIGATION to improve later */}
//         <Nav />
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <div className="HomePage">
                // <h1>Welcome to Food Shared</h1>
                // <p>Food Shared is a resource directory for users to find food pantries, free fridges, etc., etc. .</p>
                // <label htmlFor="zipCodeInput">Enter Zip Code: </label>
                // <input
                //   id="zipCodeInput"
                //   type="text"
                //   value={zipCode}
                //   onChange={handleZipCodeChange}
                // />
                // <Map zipCode={zipCode} /> {/* Pass zipCode to Map.js */}
                // <ResourceDirectory zipCode={zipCode} /> {/* Pass zipCode to ResourceDirectory.js */}
//               </div>
//             }
//           />
//           {/* AddResource Page */}
//           <Route path="/add-resource" element={<AddResource />} />
//           {/* About Page */}
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;


// // {/* <Router>
// {/* <div>
//   <nav>
//     <ul>
//       <li>
//         <Link to="/">Home</Link>
//       </li>
//       <li>
//         <Link to="/about">About</Link>
//       </li>
//       <li>
//       <Link to="/add-resource">Add a Resource</Link>
//       </li>
//     </ul>
//   // </nav> */
//   // {/* Define paths for links */}

// //   <Routes>
// //     <Route path="/" element={<HomePage />} />
// //     <Route path='/about' element={<AboutPage />} />
// //     <Route path='/add-resource' element={<AddResourcePage />} />
// //   </Routes>
// // </div>
// // </Router>
// // );
// // }; */}