import Comment from "./Comment/Comment";
import styles from "./CommentsList.module.css";
import { useEffect, useState } from "react";
import getAllComments from "../../services/getAllCommentsService";
import { NavLink, useParams } from "react-router-dom";
import "../../App.css";

const CommentsList = () => {
  const params = useParams();
  const [comments, setComments] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    getComments();
  }, []);

  useEffect(() => {
    getComments();
  }, [params]);

  const getComments = async () => {
    try {
      const { data } = await getAllComments();
      setComments(data);
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

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
    <section
      className={`container ${styles.container} ${
        !comments && styles.commentsColor
      }`}
    >
      {renderComments()}
    </section>
  );
};

export default CommentsList;
