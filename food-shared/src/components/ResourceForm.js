import React, { useState } from "react";
import axios from "axios";

const ResourceForm = () => {
    const[formData, setFormData] = useState({
        name: '',
        address: '',
        typeOfResource: '',
        operatingHours: '',
        indoorsOrOutdoors: '',
        accessibility: '',
        // Add'll fields here
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('/api/food-resources', formData);
            // Show success msg to user on submit
            console.log('Successfully submitted:', response.data);
        } catch (error) {
            console.log('Error submitting:', error);
            // console.error('Failed to submit:', error.response.data);
        }
    };

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    return (
    <form onSubmit={handleSubmit}>
      {/* Input fields for the form */}
      <input type= 'text'
        name='name'
        placeholder='Resource Name:'
        value={formData.name}
        onChange={handleChange} />

        <input type= 'text'
        name='address'
        placeholder='Resource Address:'
        value={formData.address}
        onChange={handleChange} />

        <input type= 'text'
        name='typeOfResource'
        placeholder='Type of Resource (e.g., pantry, fridge, free market, meal delivery):'
        value={formData.typeOfResource}
        onChange={handleChange} />

        <input type= 'text'
        name='operatingHours'
        placeholder='Operating Hours:'
        value={formData.operatingHours}
        onChange={handleChange} />

        <input type= 'text'
        name='indoorsOrOutdoors'
        placeholder='Indoors or Outdoors:'
        value={formData.indoorsOrOutdoors}
        onChange={handleChange} />

        <input type= 'text'
        name='accessibility'
        placeholder='Accessibility Notes:'
        value={formData.accessibility}
        onChange={handleChange} />

        {/* Add add'l fields here */}
        
        <button type='submit'>Submit</button>
    </form>
  );
};

export default ResourceForm;