import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5501/getResources',
});

// getByZipCode to backend
export const getResourcesByZip = async (zipCode) => {
  try {
    const response = await axios.get(`${api}/resources/?zipCode=${zipCode}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching resources:", error);
    return [];
  }
};

// addNewResource to backend
// const addNewResource = async (resource) => {
//   try {
//     const response = await axios.post(`${api}/resources`, resource);
//     return response.data;
//   } catch (error) {
//     console.error("Error submitting resource:", error);
//     return null;
//   }
// };

// updateResource to backend (add if there's time)

export default api;