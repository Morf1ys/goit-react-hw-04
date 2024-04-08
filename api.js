import axios from "axios";

const BASE_URL = "https://api.unsplash.com";
const ACCESS_KEY = "mHJl-GjkiegL0IFy4H_Us1oLBmJWLv9DKMbanKSM7kA";

const fetchImages = async (query, page) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/photos`, {
      params: {
        query,
        page,
        per_page: 12,
      },
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
