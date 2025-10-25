import axios from "axios";

const API_BASE = "http://127.0.0.1:5000/api";

export async function pingBackend() {
  const res = await axios.get(`${API_BASE}/ping`);
  return res.data;
}
