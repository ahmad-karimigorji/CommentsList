import http from "./httpServices";

const getAllComments = () => {
  return http.get("/comments");
};

export default getAllComments;
