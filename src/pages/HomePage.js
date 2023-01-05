import CommentsList from "../Component/CommentsList/CommentsList";
import { Routes, Route } from "react-router-dom";
import FullComment from "../Component/FullComment";

const HomePage = () => {
  return (
    <>
      <CommentsList />
      <Routes>
        <Route path="comments/:id" element={<FullComment />} />
      </Routes>
    </>
  );
};

export default HomePage;
