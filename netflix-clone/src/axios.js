import axios from "axios";

// Base URL to make request to movie database
const instance = axios.create({
    baseURL: "http://api.themoviedb.org/3",
});

export default instance;
