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
import Home from './components/home/Home';
import Help from './components/help/Help';
import Irrigation from './components/irrigation/Irrigation';
import Resources from './components/resources/Resources';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
      <Routes>
       <Route exact path="/plantsols/feed" element={<AllComponent/>}/>
        <Route exact path="/plantsols" element={<Home/>}/>
        <Route path="/plantsols/feed/:id" element={<NewPost/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/help" element={<Help/>}/>
        <Route path="/irrigation" element={<Irrigation/>}/>
        <Route path="/resources" element={<Resources/>}/>
      </Routes>
    </Router>

    </div>
  );
}

export default App;
