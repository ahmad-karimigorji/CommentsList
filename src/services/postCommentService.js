import http from "./httpServices";

const postComment = (comment) => {
  return http.post("/comments", comment);
};

export default postComment;
