import http from "./axios";

class routesData {
  create(db) {
    return http.post("/register", db);
  }

  find(db) {
    return http.post("/login", db);
  }
}

export default new routesData();
