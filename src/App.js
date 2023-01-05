import "./App.css";
import { ToastContainer } from "react-toastify";
import Layout from "./Layout/Layout";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <Layout>
      <Routes>
        {routes.map((item) => (
          <Route {...item} />
        ))}
      </Routes>
      <ToastContainer />
    </Layout>
  );
}

export default App;
