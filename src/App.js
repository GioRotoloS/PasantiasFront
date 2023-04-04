import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Calendario from "./pages/Calendario";
import Login from "./pages/Login";
import Inscripciones from "./pages/Inscripciones";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import "react-widgets/scss/styles.scss";


const Layout = () => {
  return (
    <>
      {/* <Navbar/> */}
      <Outlet/>
      {/* <Footer/> */}
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Inscripciones/>
      },
    ]
  },
  {
    path: "/calendario",
    element: <Calendario/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}

export default App;
