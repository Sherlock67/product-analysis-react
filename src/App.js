
import { Route, Routes } from "react-router-dom";
import './App.css';
import Dashboard from "./Component/Dashboard/Dashboard";
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import Review from './Component/Review/Review';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/review" element={<Review></Review>}></Route> 
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route> 
      </Routes>
      
      {/* <Review></Review> */}
    </div>
  );
}

export default App;
