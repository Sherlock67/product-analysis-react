
import { Route, Routes } from "react-router-dom";
import './App.css';
import Blog from "./Component/Blog/Blog";
import Dashboard from "./Component/Dashboard/Dashboard";
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import Review from './Component/Review/Review';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<><Home></Home> <Review></Review></>}></Route>
        <Route path="/home" element={<><Home></Home> <Review></Review></>}></Route>
        <Route path="/review" element={<Review></Review>}></Route> 
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route> 
        <Route path="/blog" element={<Blog></Blog>}></Route> 
      </Routes>
      
      {/* <Review></Review> */}
    </div>
  );
}

export default App;
