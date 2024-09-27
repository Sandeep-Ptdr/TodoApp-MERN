import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import About from "./Pages/About.jsx";
import LogIn from "./Pages/LogIn.jsx";
import Register from "./Pages/Register.jsx";
import Home from "./Pages/Home.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/register" element={<Register />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
