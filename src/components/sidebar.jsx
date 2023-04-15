import React, { useState,useEffect } from "react";
import "./sidebar.css";
import closing from "./assets/icons/closing icon.svg";
import { Link } from "react-router-dom";
//import { Routes, Route } from "react-router-dom";
//import Home from "./routes/home";
import category from "./assets/icons/Category.svg";
import s1 from "./assets/icons/s1.svg";
import s2 from "./assets/icons/s2.svg";
import s3 from "./assets/icons/s3.svg";
import s4 from "./assets/icons/s4.svg";
import s5 from "./assets/icons/s5.svg";
import s6 from "./assets/icons/s6.svg";
import s7 from "./assets/icons/s7.svg";
import s8 from "./assets/icons/s8.svg";
import group from "./assets/icons/Group.svg";
import globe from "./assets/icons/Vector.svg";
import dark from "./assets/icons/dark.svg";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
//import togglebt from "./assets/icons/button.svg";
//import setTheme from "./../App"


function Sidebar({setTheme,theme}) {
  const [sidebar, setSidebar] = useState(true);
 // const theme = setTheme(state=>state.theme)

  useEffect(() => {
    localStorage.setItem('darkMode', theme);
    const body = document.body;
    body.classList.toggle('dark-mode', theme);
  }, [theme]);

  const handleTheme=()=>{
    setTheme(!theme);
    console.log(theme);
  }
  //const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      {sidebar ? (
        <div className={theme? "side":"side-white"}>
          <div className="heading">
            <div className="avtar">
              <p>N</p>
            </div>

            <div className={theme? "name":"name-white"}>
              <p>Name</p>
            </div>

            <div className={theme ?"closing-ic":"closing-ic-white"} onClick={() => setSidebar(!sidebar)}>
              <img src={closing} alt="close" style={{}}/>
              <div />
            </div>
          </div>
          <div className="option">
            <div className="home">
              <div className="home-ic">
                <img src={category} alt="home" />
              </div>
              <Link to="/">Home</Link>
            </div>

            <div className="home">
              <div className="home-ic">
                <img src={s1} alt="s1" />
              </div>

              <Link to="/section1">Section1</Link>
            </div>

            <div className="home">
              <div className="home-ic">
                <img src={s2} alt="s2" />
              </div>
              <Link to="/section2">Section2</Link>
            </div>

            <div className="home">
              <div className="home-ic">
                <img src={s3} alt="s3" />
              </div>
              <Link to="/section3">Section3</Link>
            </div>
            <div className="home">
              <div className="home-ic">
                <img src={s4} alt="s4" />
              </div>
              <Link to="/section4">Section4</Link>
            </div>
            <div className="home">
              <div className="home-ic">
                <img src={s5} alt="s5" />
              </div>
              <Link to="/section5">Section5</Link>
            </div>
            <div className="home">
              <div className="home-ic">
                <img src={s6} alt="s6" />
              </div>
              <Link to="/section6">Section6</Link>
            </div>
            <div className="home">
              <div className="home-ic">
                <img src={s7} alt="s7" />
              </div>
              <Link to="/section7">Section7</Link>
            </div>
            <div className={theme?"section-8":"section-8-white"}>
              <Link to="/section8">
                <button>
                  <div className="s-8">
                    <img src={s8} alt="s8" />

                    <p>Section8</p>
                  </div>
                </button>
              </Link>
            </div>

            <div className="home">
              <div className="home-ic">
                <img src={group} alt="group" />
              </div>
              <Link to="/documentaion">Documentaion</Link>
            </div>
          </div>
          <div className="end-block">
            <div className="e-block-1">
              <div className={theme?"IBFR":"IBFR-white"}>
                <div className="con">
                  <p className="con-a">N</p>

                  <p className="con-b"> $0.90</p>
                </div>
              </div>
              <button className={theme?"buy":"buy-white"}>Buy $XYZ</button>
            </div>

            <div className="e-block-2">
              <div className="language">
                <img src={globe} alt="globe" />
              </div>
              <label className={theme? "set-modes":"set-modes-white"}>
                <input type="checkbox"id="toggle"checked={theme} onChange={handleTheme}/>
                <span className={theme? "toggle-bt":"toggle-bt-white"}></span>
                <img src={dark} alt="dark" className="dark1"/>
                <WbSunnyIcon alt="dark" className="dark2"sx={{color:'#808191;',fontSize:"medium"}}/>
              </label>
            </div>
          </div>
        </div>
      ) : (
        <div className={theme?"side2":"side2-white"}>
          <div className="heading-2">
            <div className="avtar">
              <p>N</p>
            </div>
            <div className={theme?"closing-ic2":"closing-ic2-white"} onClick={() => setSidebar(!sidebar)}>
              <img src={closing} alt="close" />
            </div>
          </div>
          <div className="option2">
            <div className="home2">
              <Link to="/">
                <div className="home-ic">
                  <img src={category} alt="home" />
                </div>
              </Link>
            </div>

            <div className="home2">
              <Link to="/section1">
                <div className="home-ic">
                  <img src={s1} alt="s1" />
                </div>
              </Link>
            </div>

            <div className="home2">
              <Link to="/section2">
                <div className="home-ic">
                  <img src={s2} alt="s2" />
                </div>
              </Link>
            </div>

            <div className="home2">
              <Link to="/section3">
                <div className="home-ic">
                  <img src={s3} alt="s3" />
                </div>
              </Link>
            </div>

            <div className="home2">
              <Link to="/section4">
                <div className="home-ic">
                  <img src={s4} alt="s4" />
                </div>
              </Link>
            </div>

            <div className="home2">
              <Link to="/section5">
                <div className="home-ic">
                  <img src={s5} alt="s5" />
                </div>
              </Link>
            </div>

            <div className="home2">
              <Link to="/section6">
                <div className="home-ic">
                  <img src={s6} alt="s6" />
                </div>
              </Link>
            </div>
            <div className="home2">
              <Link to="/section72">
                <div className="home-ic">
                  <img src={s7} alt="s7" />
                </div>
              </Link>
            </div>
            <div className="home2">
              <Link to="/section8">
                <div className="home-ic">
                  <img src={s8} alt="s8" />
                </div>
              </Link>
            </div>
            <div className="home2">
              <Link to="/documentaion">
                <div className="home-ic">
                  <img src={group} alt="group" style={{color:(theme?'white':'black')}}/>
                </div>
              </Link>
            </div>
          </div>
          <div className="e-block2">
            <div className="language2">
              <img src={globe} alt="globe" />
            </div>
            <label className={theme?"set-modes2":"set-modes2-white"}>
              <input type="checkbox"id="toggle"checked={theme} onChange={handleTheme}/>
              
              <img src={dark} alt="dark" className="dark1"style={{marginLeft:'10'}}/>
              <WbSunnyIcon alt="dark" className="dark2"sx={{color:'#808191;',fontSize:"medium",ml:'30'}}/>
              <span className={theme?"toggle-bt":"toggle-bt-white"}></span>
            </label>
          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;
