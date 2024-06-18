import http from "../http-common";

class AgencyDataService {
  getAll() {
    return http.get("/agencies");
  }

  get(id) {
    return http.get(`/agencies/${id}`);
  }

  create(data) {
    return http.post("/agencies", data);
  }

  update(id, data) {
    return http.put(`/agencies/${id}`, data);
  }

  delete(id) {
    return http.delete(`/agencies/${id}`);
  }

  deleteAll() {
    return http.delete(`/agencies`);
  }

  findByTitle(title) {
    return http.get(`/agencies?description=${title}`);
  }
}

export default new AgencyDataService();