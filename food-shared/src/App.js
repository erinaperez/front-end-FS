import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import AddResource from "./components/AddResource";
import About from "./components/About";
import ResourceMap from "./components/ResourceMap";
import ResourceDirectory from "./components/ResourceDirectory";
import Nav from "./components/Nav";
import "./style.css"

  const App = () => {
    // State to store zip code for searching resources
    const [zipCode, setZipCode] = useState("");
  
    // Handler zip code input change
    const handleZipCodeChange = (event) => {
      setZipCode(event.target.value);
    };
  
  return (
    <Router>
      <div className="app-container">
        <Nav />
        {/* Home Page */}
        <Routes>
          <Route 
            path="/" 
            element={
              <div className="home">
                <h1>Welcome to Food Shared</h1>
                <p>Food Shared is a directory of food pantries, free fridges, etc.</p>
                <label htmlFor="zipCodeInput">Enter Zip Code: </label>
                <input
                type="text"
                id="zipCodeInput"
                value={zipCode}
                onChange={handleZipCodeChange}
              />
              <ResourceMap zipCode={zipCode} /> {/* Passing zipCode to the ResourceMap component */}
              <ResourceDirectory zipCode={zipCode} /> {/* Passing zipCode to the ResourceDirectory component */}
            </div>
          }
        />
        {/* Add Resource Page */}
        <Route path="/add-resource" element={<AddResource />} />
        {/* About Page */}
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  </Router>
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