import http from "./axiosHttp";

const getAll = () => {
  return http.get("/categories");
};

const getCate = (id) => {
  return http.get(`/categories/${id}`);
};

const createCate = (data) => {
  return http.post("/categories", data);
};

const updateCate = (id, data) => {
  return http.put(`/categories/${id}`, data);
};

const removeCate = (id) => {
  console.log(id);
  return http.delete(`/categories/${id}`);
};

export default {
  getAll,
  getCate,
  createCate,
  updateCate,
  removeCate,
};
