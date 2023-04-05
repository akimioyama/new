import axios from "axios";

export default class PostService {
  static filter = null;

  static async getAll(limit = 4, page = 1) {
    if (this.filter == null) {
      const res = await axios.get(
        "https://localhost:44330/api/Aparts?limit=" + limit + "&page=" + page
      );
      return res;
    } else {
      const res = await axios.post(
        "https://localhost:44330/api/Aparts/filter?limit=" + limit + "&page=" + page, this.filter);
      return res;
    }
  }

  static async getOne(id) {
    const res = await axios.get("https://localhost:44330/api/Aparts/" + id);
    return res;
  }

  static async getAllStreet() {
    const res = await axios.get("https://localhost:44330/api/Aparts/allStreet");
    return res;
  }
}
