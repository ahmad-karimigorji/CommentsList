import http from "./httpServices";

const getOneComment = (id) => {
  return http.get(`/comments/${id}`);
};

export default getOneComment;
