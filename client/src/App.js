import "./App.css";
import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Landing from "./components/layout/Landing";
import Navbar from "./components/layout/Navbar";
// Redux
import { Provider } from "react-redux";
import store from "./store";
import Alert from "./components/layout/Alert";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Fragment>
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
          </Routes>
          <section className="container">
            <Alert />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </section>
        </Fragment>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
