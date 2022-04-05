
import './App.css';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import Review from './Component/Review/Review';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <Review></Review>
    </div>
  );
}

export default App;
