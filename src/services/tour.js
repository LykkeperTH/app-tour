import axios from "axios";
import { API_URL } from "../configs";

class Tour {
  url = `${API_URL}/tours`;
  async getTours() {
    try {
      const res = await axios.get(this.url);
      return res.data;
    } catch (error) {
      throw error;
    }
  }
  async createTour(data) {
    try {
      const res = await axios.post(this.url, data);
      return res.data;
    } catch (error) {
      throw error;
    }
  }
}
export const TourService = new Tour();
