import axios from "axios";

export default class PostService {
  static filter = null;

  static async getAll(limit = 4, page = 1) {
    if (this.filter == null) {
      const res = await axios.get(
        "https://localhost:44330/api/Aparts?limit=" + limit + "&page=" + page
      )
      return res
      
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
  static async login(conf) {
    let res = null
    await axios.post("https://localhost:44330/api/Account/login", 
    conf).then(function (response) {
      res = response
    }).catch(function (err) {
      res = err
    })
    return res
  }
  static async register(conf) {
    let res = null
    await axios.post("https://localhost:44330/api/Arendatels/register", 
    conf).then(function (response){
      res = response
    }).catch(function (err) {
      res = err
    })
    return res;
  }
  static async changeUser(data, conf){
    const res = await axios.put("https://localhost:44330/api/Arendatels", data, conf)
    return res
  }
  static async getInfo(conf) {
    const res = await axios.get("https://localhost:44330/api/Arendatels", conf);
    return res
  }
  static async getApartById(conf) {
    const res = await axios.get("https://localhost:44330/api/Aparts/byid", conf)
    return res
  }
  static async postImg(id) {
    const res = await axios.post("https://localhost:44330/api/Image/" + id)
    return res
  }
  static async createApp(conf, config) {
    const res = await axios.post("https://localhost:44330/api/Aparts", conf, config)
    return res
  }

  static async changeForRent(data, conf) {
    const res = await axios.put("https://localhost:44330/api/Aparts/forrent/" + data, conf)
    return res
  }
}
