import React from "react";
import Header from "./comonents/Header/Header";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Footer from "./comonents/FooterSection/Footer";
import Image from "./comonents/ImageCard/Image";

const App = () => {
  return (
    <>
      <Header />
      <Image />
      <Footer />
      <ToastContainer position="bottom-right" />
    </>
  );
};

export default App;
