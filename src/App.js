import "./App.css";
import { ToastContainer } from "react-toastify";
import Layout from "./Layout/Layout";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <div className='App'>
      <Layout>
        <Routes>
          {routes.map((item) => (
            <Route {...item} key={item.path} />
          ))}
        </Routes>
        <ToastContainer />
      </Layout>
    </div>
  );
}

export default App;
