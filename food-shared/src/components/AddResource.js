import React, { useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddResource = () => {
  const [formData, setFormData] = useState({
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
      console.log("Thank you for submitting a resource! If it meets the criteria for the directory it will be added and viewable in the map and directory in 2-4 business days.", response.data);
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
      <div className="add-resource-container">
          <img style={{ width: "85%", height: "65%" }} src="add-resource.png" 
          alt="Add a Resource: Complete the form below with as much information as possible to have a resource added to the directory & map. Submissions will be reviewed within 2-4 business days. If you provided contact information we will reach out if any clarification is needed.  Thank you!" />
        {/* </div> */}
        <div className="add-resource-form">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Resource Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formTypeOfResource">
              <Form.Label>Type of Resource</Form.Label>
              <Form.Control
                type="text"
                name="typeOfResource"
                value={formData.typeOfResource}
                onChange={handleChange}
              />
              <Form.Text className="text-muted">
                You can add multiple, e.g., pantry, fridge, free market, meal delivery, toiletries, etc.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formAffiliation">
              <Form.Label>Affiliation</Form.Label>
              <Form.Control
                type="text"
                name="affiliation"
                value={formData.affiliation}
                onChange={handleChange}
              />
              <Form.Text className="text-muted">
                e.g., Mutual aid group, non-profit org, private resident, none, etc. 
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formOperatingHours">
              <Form.Label>Operating Hours</Form.Label>
              <Form.Control
                type="text"
                name="operatingHours"
                value={formData.operatingHours}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formIndoorsOrOutdoors">
              <Form.Label>Indoors or Outdoors</Form.Label>
              <Form.Control
                type="text"
                name="indoorsOrOutdoors"
                value={formData.indoorsOrOutdoors}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formAccessibility">
              <Form.Label>Accessibility Notes</Form.Label>
              <Form.Control
                type="text"
                name="accessibility"
                value={formData.accessibility}
                onChange={handleChange}
              />
              <Form.Text className="text-muted">
                e.g., wheelchair accessible, stairs, vegan/GF options, etc.
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="formNotes">
              <Form.Label>Additional Notes</Form.Label>
              <Form.Control
                type="text"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formLastUpdated">
              <Form.Label>Today's Date</Form.Label>
              <Form.Control
                type="text"
                name="lastUpdated"
                value={formData.lastUpdated}
                onChange={handleChange}
              />
              <Form.Text className="text-muted">
                e.g., 08/15/2023
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formContact">
              <Form.Label>Contact</Form.Label>
              <Form.Control
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
              />
              <Form.Text className="text-muted">
                optional
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddResource;