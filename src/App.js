import './App.css';
import {Routes, Route} from 'react-router-dom'
import { NavLink} from 'react-router-dom'
//import Home from "./components/Home";
import Support from "./components/Support";
import About from "./components/About";
import Labs from "./components/Labs";
import NotFound from "./components/NotFound";
import MainHeader from "./components/MainHeader";




function App() {


  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink> 
          </li>
          <li>
            <NavLink to="/support">Support</NavLink> 
          </li>
          <li>
            <NavLink to="/about">About</NavLink> 
          </li>
          <li>
            <NavLink to="/labs">Labs</NavLink> 
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element = {<MainHeader/>} > 
        <Route index elemeent = {<Home/>} />
        <Route path="/support" element = {<Support/>}></Route>
        <Route path="/about" element = {<About/>}></Route>
        <Route path="/labs" element = {<Labs/>}></Route>
        <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    {/* If we want that parent route element allow child element to render then we have to use outlet tag. 
    Otherwise if we wrap all routes into one parent route. we will not be able to render. */}
    </div>
  );
}

 export default App;

// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Avi20189/routerApp.git
// git push -u origin main

//git commands for next day's push

// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Avi20189/reactI3.git
// git push -u origin main