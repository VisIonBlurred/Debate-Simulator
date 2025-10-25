
import axios from "axios";

const API_BASE = "http://127.0.0.1:5000"; // change this if hosted elsewhere

export async function startDebate(topic, rounds = 2) {
  const response = await axios.post(`${API_BASE}/start_debate`, {
    topic,
    rounds,
  });
  return response.data;
}
