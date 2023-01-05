import HomePage from "./pages/HomePage";
import NewCommentPage from "./pages/NewCommentPage/NewCommentPage";
import NotFound from "./pages/NotFound";
const routes = [
  { path: "/*", element: <HomePage /> },
  { path: "new-comment", element: <NewCommentPage /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
