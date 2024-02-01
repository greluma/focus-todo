import axios from "axios";
const pexelsEndpoint = "https://api.pexels.com/v1/";

const API_Key = import.meta.env.VITE_API_KEY;

const pexelsApiConfig = {
  headers: {
    Authorization: `${API_Key}`,
  },
};

const query = { searchTerm: "random" };

async function newImage() {
  const response = await axios.get(
    `${pexelsEndpoint}search?query=${query.searchTerm}&per_page=80&orientation=landscape`,
    pexelsApiConfig
  );
  const data = response.data;
  const random = Math.floor(Math.random() * 79);
  const imageResult = data.photos[random].src.large2x;
  return imageResult;
}

export default newImage;
