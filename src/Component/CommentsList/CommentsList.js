import Comment from "./Comment/Comment";
import styles from "./CommentsList.module.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import getAllComments from "../../services/getAllCommentsService";
import postComment from "../../services/postCommentService";
// import deleteComment from "../../services/deleteCommentService";
import { NavLink } from "react-router-dom";

const CommentsPage = () => {
  const [comments, setComments] = useState(null);
  // const [selectedComment, setSelectedComment] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    try {
      const { data } = await getAllComments();
      setComments(data);
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  const postCommentHandler = async (comment) => {
    try {
      await postComment({
        ...comment,
        postId: 10,
      });
      getComments();
      toast.success("Create Comment !");
    } catch (error) {
      console.log(error);
    }
  };

  // const deleteCommentHandler = async (id) => {
  //   try {
  //     await deleteComment(id);
  //     getComments();
  //     setSelectedComment(null);
      
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const renderComments = () => {
    let renderValue = <p>Loading ...</p>;
    if (error) {
      renderValue = <p className={styles.error}>fatching data failed !</p>;
    }
    if (comments && !error) {
      renderValue = comments.map((item) => (
        <NavLink to={`/comments/${item.id}`} key={item.id}>
          <Comment comments={item} />
        </NavLink>
      ));
    }

    return renderValue;
  };

  return (
    <div className={styles.container}>
      <section
        className={`${styles.comments} ${!comments && styles.commentsColor}`}
      >
        {renderComments()}
      </section>
    </div>
  );
};

export default CommentsPage;
