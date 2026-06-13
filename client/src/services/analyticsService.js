import axios from "axios";

const API = "http://localhost:5000/api";

export const getSummary = () => axios.get(`${API}/summary`);