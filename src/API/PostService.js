import axios from "axios";

export default class PostService {
  static async getAll() {
    try {
      const response = await axios.get("http://localhost:3001/tests");
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
}
