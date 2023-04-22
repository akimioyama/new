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
    const res = await axios.get("https://localhost:44330/api/Aparts/q/" + data, conf)
    return res
  }

  static async changeInfoApp(data, conf){
    const res = await axios.put("https://localhost:44330/api/Aparts", data, conf)
    return res
  }
  static async loginAdmin(data){
    let res = null
    await axios.post("https://localhost:44330/api/Account/loginadmin", data)
    .then(function (response){
      res = response
    }).catch(function (err) {
      res = err
    })
    return res;
  }

  static async createReq(data) {
    const res = await axios.post("https://localhost:44330/api/Request", data)
    return res
  }
  static async getInfoAdmin(conf) {
    const res = await axios.get("https://localhost:44330/api/Admin", conf)
    return res
  }
  static async getReq(status) {
    const res = await axios.get("https://localhost:44330/api/Request/" + status)
    return res
  }
  static async getReqProc(status, conf) {
    const res = await axios.get("https://localhost:44330/api/Request/" + status, conf)
    return res
  }
  static async changeStatus(data) {
    const res = await axios.post("https://localhost:44330/api/Request/change", data)
    return res
  }
  static async infoAboutArend(id) {
    const res = await axios.get("https://localhost:44330/api/Arendatels/q/" + id)
    return res
  }
  static async deleteApart(id, conf) {
    const res = await axios.delete("https://localhost:44330/api/Aparts/del/" + id, conf)
    return res
  }
  static async getAllAdmin(conf) {
    const res = await axios.get("https://localhost:44330/all", conf)
    return res
  }
  static async deleteAdmin(id, conf) {
    const res = await axios.delete("https://localhost:44330/api/Admin?id="+id, conf)
    return res
  }
  static async changeAdmin(data, conf) {
    const res = await axios.put("https://localhost:44330/api/Admin", data, conf)
    return res
  }
  static async createAdmin(data, conf) {
    const res = await axios.post("https://localhost:44330/api/Admin", data, conf)
    return res
  }
  static async deleteApartAdmin(id, conf) {
    const res = await axios.delete("https://localhost:44330/api/Aparts/admin/del/"+id, conf)
    return res
  } 
  static async changeApartAdmin(data, conf) {
    const res = await axios.put("https://localhost:44330/api/Aparts/admin/put", data, conf)
    return res
  }
}
