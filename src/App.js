import { Toaster } from "react-hot-toast";
import { Route, Routes, useLocation } from "react-router-dom";
import './App.css';
import RequireAuth from './Component/RequireAuth';
import useScrollToTop from "./hooks/useScrollToTop";
import Blog from "./Pages/Blog/Blog";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyProfile from "./Pages/Dashboard/myProfile";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";
import NotFound from "./Pages/NotFound/NotFound";
import Products from "./Pages/Products/Products";
import Purchase from "./Pages/Purchase/Purchase";
import Register from "./Pages/Register/Register";
import Header from "./Pages/Shared/Header";
import Testimonial from "./Pages/Testimonial/Testmonial";

function App() {
  useScrollToTop();
  const location = useLocation();
  console.log(location);
  return (
    <div className="App">
      {location.pathname === "/dashboard" || location.pathname === "/register" || location.pathname === '/login'  ? null : <Header></Header>}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/purchase/:id" element={
          <RequireAuth>
            <Purchase/>
          </RequireAuth>
        }/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/portfolio" element={<MyPortfolio/>}/>
        <Route path="/testimonials" element={<Testimonial/>}/>
        <Route path="/products" element={
          <RequireAuth>
            <Products/>
          </RequireAuth>
        }/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/myprofile" element={<MyProfile/>}/>
        {/* <Route path="/dashboard" element={
          <RequireAuth>
          <Dashboard/>
          </RequireAuth>
        }>
          <Route index element={<MyProfile/>}/>
          <Route path="myorders" element={<MyOrders/>}/>
          <Route path="payment/:id" element={<Payment/>}/>
          <Route path="addreview" element={<AddReview/>}/>
          <Route path="manageproducts" element={
            <RequireAdmin>
              <ManageProducts/>
            </RequireAdmin>
          }/>
          <Route path="addproduct" element={
            <RequireAdmin>
              <AddProduct/>
            </RequireAdmin>
          }/>
          <Route path="makeadmin" element={
            <RequireAdmin>
              <ManageUser/>
            </RequireAdmin>
          }/>
          <Route path="manageorders" element={
            <RequireAdmin>
              <ManageOrders/>
            </RequireAdmin>
          }/>
        </Route> */}
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Toaster/>
    </div>
  );
}

export default App;