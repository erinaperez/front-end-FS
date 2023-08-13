import React, { useState } from "react";
import axios from "axios";

const AddResource = () => {
  const[formData, setFormData] = useState({
    name: '',
    address: '',
    typeOfResource: '',
    affiliation: '',
    operatingHours: '',
    indoorsOrOutdoors: '',
    accessibility: '',
    notes: '',
    contact: '',
    // Add'll fields here
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/food-resources', formData);
      // Show success msg to user on submit
      console.log("Thank you for submitting a resource. If it meets the criteria for the directory it will be added and viewable in the map in 2-4 business days.", response.data);
    } catch (error) {
      console.log('Error submitting:', error);
      // console.error('Failed to submit:', error.response.data);
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="AddResource">
      <h2>Add a Resource</h2>
      <form onSubmit={handleSubmit}>
        {/* Input fields for submission form */}
        <input type= 'text'
          name='name'
          placeholder='Resource Name:'
          value={formData.name}
          onChange={handleChange} 
        />
        <input type= 'text'
          name='address'
          placeholder='Address:'
          value={formData.address}
          onChange={handleChange} 
        />
        <input type= 'text'
          name='typeOfResource'
          placeholder='Type of Resource (e.g., pantry, fridge, free market, meal delivery):'
          value={formData.typeOfResource}
          onChange={handleChange} 
        />
        <input type= 'text'
          name='operatingHours'
          placeholder='Open Hours:'
          value={formData.operatingHours}
          onChange={handleChange} 
        />
        <input type= 'text'
          name='affiliation'
          placeholder='Affiliation (e.g., local mutual aid group, private resident, none, unknown):'
          value={formData.affiliation}
          onChange={handleChange} 
        />
        <input type= 'text'
          name='indoorsOrOutdoors'
          placeholder='Indoors or Outdoors:'
          value={formData.indoorsOrOutdoors}
          onChange={handleChange} 
        />
        <input type= 'text'
          name='accessibility'
          placeholder='Accessibility Notes:'
          value={formData.accessibility}
          onChange={handleChange} 
        />
        <input type= 'text'
          name='notes'
          placeholder='Additional Notes:'
          value={formData.notes}
          onChange={handleChange} 
        />
        <input type= 'text'
          name='lastUpdated'
          placeholder='Date (e.g., 08/05/2023):'
          value={formData.lastUpdated}
          onChange={handleChange} 
        />
        <input type= 'text'
          name='contace'
          placeholder='Contact (optional):'
          value={formData.contact}
          onChange={handleChange} 
        />
        {/* Add add'l fields here */}
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default AddResource;