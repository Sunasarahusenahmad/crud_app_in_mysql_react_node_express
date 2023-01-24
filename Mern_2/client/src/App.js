import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import AddEdit from "./pages/AddEdit.js";
import PageNotFound from "./pages/PageNotFound.js";
import View from "./pages/View.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer position="top-center" />
        <Routes>
        
          <Route path="/" element={<Home />}> </Route>

          <Route path="/adduser" element={<AddEdit />}> </Route>

          <Route path="/update/:id" element={<AddEdit />}> </Route>

          <Route path="/view/:id" element={<View />}> </Route>

          <Route path="/*" element={<PageNotFound />}> </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
