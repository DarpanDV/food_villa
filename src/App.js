import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import {createBrowserRouter,Outlet} from 'react-router-dom';
import Error from "./Components/Error";
import About from "../src/Components/About";
import Contact from "../src/Components/Contact"
import ResRoute from "./Components/ResRoute";
const App=()=>{

  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  );
}
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      // DYNAMIC <ROUTING>
      {
        path:"/res/:id", //:id is not hard coded we can use anything resId but in ResRoute component we have to param.resId
        element:<ResRoute/>
      }
    ],
  }
  ])

export default appRouter;
