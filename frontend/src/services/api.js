import axios from 'axios';

const API_URL = 'http://20.251.162.242:8081/api/v1';

// Function to get the full menu by name
export const getFullMenuByName = async (name) => {
  try {
    const response = await axios.get(`${API_URL}/menus/${name}`); 
    return response.data;
  } catch (error) {
    console.error("Error in the API call:", error);
    throw error;
  }
};

