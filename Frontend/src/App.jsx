import React, { useEffect } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "./redux/slices/AuthSlice";

const App = () => {
  const dispatch = useDispatch();
useEffect(() => {
const id = sessionStorage.getItem('id');
if(id){
  dispatch(login());
}

}, [])


  return (
    <div>
      <Header />
      <main className="min-h-[100vh] bg-gray-100">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
