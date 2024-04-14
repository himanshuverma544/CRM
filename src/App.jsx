import './App.css';

import { HashRouter, Routes, Route } from "react-router-dom";

import { DASHBOARD, PRODUCTS, CUSTOMERS, SIGN_IN, SIGN_UP, PAGE404 } from './routes';

import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import Products from './pages/Products';
import Customers from './pages/Customers';
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Page404 from './pages/Page404';


function App() {

  return (
    <HashRouter basename=''>
      <Routes>
        <Route path={DASHBOARD.path} element={<Layout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path={PRODUCTS.path} element={<Products/>}/>
          <Route path={CUSTOMERS.path} element={<Customers/>}/>
          <Route path={SIGN_IN.path} element={<SignIn/>}/>
          <Route path={SIGN_UP.path} element={<SignUp/>}/>
          <Route path={PAGE404.path} element={<Page404/>}/>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
