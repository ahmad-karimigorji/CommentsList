import http from "./httpServices";

const deleteComment = (id) => {
  return http.delete(`/comments/${id}`);
};

export default deleteComment;
