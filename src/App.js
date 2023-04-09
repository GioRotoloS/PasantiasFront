import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Tutor from "./pages/Tutor";
import Inicio from "./pages/Inicio";
import Alumno from "./pages/Alumno";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import "react-widgets/scss/styles.scss";
import 'bootstrap/dist/css/bootstrap.min.css';



const router = createBrowserRouter([
  {
    path: "/tutor",
    element: <Tutor/>,
  },
  {
    path: "/alumno",
    element: <Alumno/>,
  },
  {
    path: "/",
    element: <Inicio/>
  },
]);

function App() {
  return (
    <div className="app">
      <div>
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}

export default App;
