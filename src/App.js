import './App.css';
import AllComponent from './components/allComponent/AllComponent';
import Navbar from './components/navbar/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NewPost from './components/newPost/NewPost';
import About from './components/about/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
      <Routes>
        <Route exact path="/plantsols" element={<AllComponent/>}/>
        <Route path="/:id" element={<NewPost/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </Router>

    </div>
  );
}

export default App;
