import axios from "axios";

const API_BASE_URL = "http://localhost:8085"; // Replace with your backend URL

export const fetchPdfResults = async (query) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pdf/search?query=${query}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching PDFs:", error);
    throw error;
  }
};

export const fetchPodcastResults = async (query) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/podcast/search?query=${query}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Podcasts:", error);
    throw error;
  }
};

export const fetchVideoResults = async (query) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/video/search?query=${query}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Videos:", error);
    throw error;
  }
};