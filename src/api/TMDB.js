import axios from "axios";

const KEY = "19f84e11932abbc79e6d83f82d6d1045";
export default axios.create({
  baseURL: "https://api.themoviedb.org/3/discover/movie?",
  params: {
    api_key: KEY,
  },
});
