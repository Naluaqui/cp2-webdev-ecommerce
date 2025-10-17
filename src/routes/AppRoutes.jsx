import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Perfil from "../pages/Perfil";
import Carrinho from "../pages/Carrinho";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
    },
    {
    path: 'perfil',
    element: <Perfil/>
    },
    {
    path: 'carrinho',
    element: <Carrinho/>
    },
]);

