import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Route,Routes,Link} from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact'; 
// import {Link} from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0)

  return (
    
    // <BrowserRouter>
    // <Routes>
    //   <Route path="/" element={<Home/>}/>
    //   <Route path="/about" element={<About/>}/>
    //   <Route path="/contact" element={<Contact/>}/>
    // </Routes>
    //   <div>
    //     Welcome to Learning of React Router
    //   </div>  
       
    // </BrowserRouter>
    <>
      <header>
        <a href="#">Logo</a>
        <BrowserRouter>
       
        <nav>
          <ul>
             <li>
              <Link to="./components/home">Home</Link>
            </li>
            
            <li>
              <Link to="./components/about">About</Link>
            </li>
            <li>
              <Link to="./components/contact">Contact</Link>
            </li>
            {/* <li>hello</li> */}
          </ul>
        </nav>
        
        </BrowserRouter>
      </header>
    </>
    
  )
}

export default App
