import axios from 'axios';

export default axios.create({
  baseURL: `https://react-itinerary.netlify.app/.netlify/functions/`
});