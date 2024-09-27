import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <main className="min-h-[100vh]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
