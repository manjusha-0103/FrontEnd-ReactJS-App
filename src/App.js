import {React,useState} from "react";
import "./App.css";
import Banner from "./components/banner";
import Sidebar from "./components/sidebar";
import Middle from "./components/middle";
import Rightspace from "./components/rightspace"
import { Route, Routes,BrowserRouter } from "react-router-dom";

//import Demo from "./components/pages/Demo";
function App() {
  const [theme,setTheme] = useState(localStorage.getItem('darkMode') === 'true' || false);

  return (
    <div className="App">
      <div className={!theme?"App-header":"App-header-white"}>
      
        <Banner /> 
        <BrowserRouter>
        <Routes>
            <Route path="/" element ={<Sidebar setTheme={setTheme} theme={theme}/>} />
            <Route path="/sidebar" element={<Sidebar/>}/>
            <Route path="/section1" element={<Sidebar/>}/>
            <Route path="/section2" element={<Sidebar/>}/>
            <Route path="/section3" element={<Sidebar/>}/>
            <Route path="/section4" element={<Sidebar/>}/>
            <Route path="/section5" element={<Sidebar/>}/>
            <Route path="/section6" element={<Sidebar/>}/>
            <Route path="/section7" element={<Sidebar/>}/>
            <Route path="/section8" element={<Sidebar/>}/>
            <Route path="/documentaion" element={<Sidebar/>}/>
        </Routes>
        
        <Routes>
          <Route path="/" element ={<Middle theme={theme} />} />
        </Routes>
        <Routes>
          <Route path="/" element ={<Rightspace theme={theme}/>} />
        </Routes>
        </BrowserRouter>
      </div >
    </div>
  );
}

export default App;

