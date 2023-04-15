import React, { useState } from "react";
import "./rightspace.css";
//import "./dropdown.css";
import useData from './usedata';
import path from "./assets/icons/Path.svg";
import enter from "./assets/icons/enter.svg";
import deposit from "./assets/icons/deposit.svg";
import dropdown from './assets/icons/dropdown.svg'
import wallet from './assets/icons/Wallet.svg'
import {Link} from 'react-router-dom';
//import Dropdown from "./dropdown";
//import { Addressdropdown } from "./dropdown"


function Rightspace({theme}) {
  const data = useData('https://raw.githubusercontent.com/akshita151199/APIs/main/data');
  //const inputcode = useRef(null)
  //let link = useRef(null)
  const [drop1, setDropdown1] = useState(true);
  const [isdrop, setDropdown2] = useState(false);
  const [iscode, setLink] = useState("");

  const handelcode = (e) => {
    setLink(e.target.value);
  };

  return (<>
    <div className="right-side">
      <div className="sub-rigt">
        <div className="right-nav">
          <div className={theme?"dropdown-1-white":"dropdown-1"}>
              <button onClick={() => setDropdown1(!drop1)} onMouseLeave={()=>setDropdown1(drop1)}>
                <div className="dropdown-1-con">
                  <img
                    src={data.chain?.img}
                    alt={data.chain?.name}
                    className="img-1"
                  />
                  <p>Avalanche</p>
                  <img src={dropdown} alt="drop" />
                </div>
              </button>
              {!drop1 && 
            <div className={theme?"down-list2-white":"down-list2"} style={{marginTop:'2%'}}>
              <ul>
                <Link to = "/option1">
                  <li>Option1</li>
                </Link>
                <Link to = "/option2">
                  <li>Option2</li>
                </Link>
                <Link to = "/option3">
                  <li>Option3</li>
                </Link>
                <Link to = "/option4">
                  <li>Option4</li>
                </Link>
              </ul>
            </div>}
          </div>
          <div className={theme?"dropdown-2-white":"dropdown-2"} style={{marginTop:'1O'}}>
            <button onClick={()=>setDropdown2(!isdrop)} >
              <div className="dropdown-2-con">
                <img src={wallet} alt="wallet" />
                <p>0xf6...1353</p>
                <img src={dropdown} alt="drop" className="drop" />
              </div>
            </button>
            {isdrop && 
            <div className={theme?"down-list2-white":"down-list2"}>
              <ul>
                <Link to = "/option1">
                  <li>option1</li>
                </Link>
                <Link to = "/option2">
                  <li>option2</li>
                </Link>
                <Link to = "/option3">
                  <li>option3</li>
                </Link>
              </ul>
              
            </div>}
          </div>
          
        </div>
        
        <div className="display-block">
          
          
        </div>
          
        
        <div className="right-blok">
          <div className={theme?"right-blok-head-white":"right-blok-head"}>
            <img src={path} alt="path" />
            <p>Custom link</p>
          </div>
          <p className={theme?"pl-white":"pl"}>https://testnet.xyz.xyz/trade?ref=</p>
          <div>
            <div className={theme?"input-link-white":"input-link"}>
              <input
                value={iscode}
                type="text"
                placeholder="ENTER"
                onChange={(e) => handelcode(e)}
              />
            </div>
            <div className="withdraw">
              <div className="custom-bt">
                <a
                  href={"https://testnet.xyz.xyz/trade?ref=".concat(String(iscode))}
                target="_blank"  rel="noreferrer" >
                  <button type="submit">
                    <div className="custom-bt-con">
                      <img src={enter} alt="enter" />
                      <p>Custom link</p>
                    </div>
                  </button>
                </a>
              </div>
              <div className={theme?"cancel-white":"cancel"}>
                <button>
                  <div className="cancel-con">
                    <img src={deposit} alt="deposit" />
                    <p>Cancel</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div></>
  );
}

export default Rightspace;
