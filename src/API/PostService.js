import axios from "axios";

export default class PostService {
  static async getAll(limit = 4, page = 1) {
    const res = await axios.get("https://localhost:44330/api/Aparts?limit=" + limit + 
    "&page=" + page);
    return res;
  }

  static async getOne(id) {
    const res = await axios.get("https://localhost:44330/api/Aparts/" + id)
    return res;
  }

  
}

