import { useRef, useState } from "react";
import styles from "./NewCommentPage.module.css";

const NewCommentPage = ({ onAddPost }) => {
  const [comment, setComment] = useState({
    name: "",
    email: "",
    body: "",
  });

  const errorRef = useRef();

  const changeHandler = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  const addCommentHandler = () => {
    for (const key in comment) {
      if (!comment[key].trim()) {
        errorRef.current.innerText = `${key} is empty.`;
        return;
      }
    }

    onAddPost(comment);

    errorRef.current.innerText = ``;
    setComment({
      name: "",
      email: "",
      body: "",
    });
  };
  return (
    <div className={styles.newComment}>
      <h2>Add New Comment</h2>
      <div>
        <label>name</label>
        <input
          type="text"
          value={comment.name}
          name="name"
          onChange={changeHandler}
        />
      </div>
      <div>
        <label>email</label>
        <input
          type="email"
          value={comment.email}
          name="email"
          onChange={changeHandler}
        />
      </div>
      <div>
        <label>body</label>
        <input
          type="text"
          value={comment.body}
          name="body"
          onChange={changeHandler}
        />
      </div>
      <button onClick={addCommentHandler}>Add New Comment</button>
      <p ref={errorRef}></p>
    </div>
  );
};

export default NewCommentPage;