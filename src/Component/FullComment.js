import { useNavigate, useParams } from "react-router-dom";
import styles from "./FullComment.module.css";
import getOneComment from "../services/getOneComment"
import { useEffect, useState } from "react";
import deleteComment from "../services/deleteCommentService";
import { toast } from "react-toastify";

const FullComment = () => {
  const navigate = useNavigate()
  const [comment, setComment] = useState(null)

  const params = useParams()
  console.log(params);
  useEffect(() => {
    const getComment = async () => {
      try {
        const {data} = await getOneComment(params.id)
        setComment(data)      
      } catch (error) {
        
      }
    }
    getComment()
  }, [params])

  const deleteCommentHandler = async (id) => {
      try {
         await deleteComment(id)
         navigate('/')
         toast.success("Deleted Comment !");
      } catch (error) {
        
      }
    
  }



  if (!comment) {
    return (
      <div className={styles.fullComment}>
        <p>please select a Comment !</p>
      </div>
    );
  }

  return (
    <div className={styles.fullComment}>
      <p>name: {comment.name}</p>
      <p>email: {comment.email}</p>
      <p>comment: {comment.body}</p>
      <button onClick={() => deleteCommentHandler(comment.id)}>Delete</button>
    </div>
  );
};

export default FullComment;
