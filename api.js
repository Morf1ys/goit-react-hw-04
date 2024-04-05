import axios from "axios";

const BASE_URL = "https://api.unsplash.com";
const ACCESS_KEY = "mHJl-GjkiegL0IFy4H_Us1oLBmJWLv9DKMbanKSM7kA";

const fetchImages = async (query, perPage = 10) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/photos`, {
      params: { query, per_page: perPage },
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw new Error("Failed to fetch images");
  }
};

export default fetchImages;
