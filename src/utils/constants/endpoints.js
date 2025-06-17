// membuat variable API_KEY
const API_KEY = import.meta.env.VITE_API_KEY;

// membuat variable url api: BASE_URL
const BASE_URL = "https://api.themoviedb.org/3/movie";

// membuat variable endpoint (object)
const ENDPOINTS = {
  POPULAR: `${BASE_URL}/popular?api_key=${API_KEY}`,
  TOP_RATED: `${BASE_URL}/top_rated?api_key=${API_KEY}`,
  NOW_PLAYING: `${BASE_URL}/now_playing?api_key=${API_KEY}`,
};

export default ENDPOINTS;
