import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import postComment from "../../services/postCommentService";
import styles from "./NewCommentPage.module.css";

const NewCommentPage = () => {
  const navigate = useNavigate();
  const [comment, setComment] = useState({
    name: "",
    email: "",
    body: "",
  });

  const errorRef = useRef();

  const changeHandler = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  const addCommentHandler = async () => {
    for (const key in comment) {
      if (!comment[key].trim()) {
        errorRef.current.innerText = `${key} is empty.`;
        return;
      }
    }

    try {
      await postComment({ ...comment, postId: 10 });
      navigate("/");
      toast.success("create comment.");
    } catch (error) {
      console.log(error);
    }

    setComment({
      name: "",
      email: "",
      body: "",
    });
  };
  return (
    <div className={`container ${styles.newComment}`}>
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
