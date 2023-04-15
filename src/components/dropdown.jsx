import React from "react";
import { useState } from "react";
import dropdown from "./assets/icons/dropdown.svg";
import wallet from "./assets/icons/Wallet.svg";
//import "./dropdown.css";
import useData from "./usedata";

export default function Dropdown() {
  const data = useData(
    "https://raw.githubusercontent.com/akshita151199/APIs/main/data"
  );
  const [drop1, setDropdown1] = useState(true);

  return (
    <>
      {!drop1 ? (
        <>
          <div className="dropdown-1">
            <button onClick={() => setDropdown1(!drop1)}>
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
            <div className="down-list1">
              <p>list</p>
            </div>
          </div>
        </>
      ) : (
        <div className="dropdown-1">
          <button onMouseEnter={() => setDropdown1(!drop1)}>
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
        </div>
      )}
    </>
  );
}

export function Addresslist() {
  const [isdrop, setDropdown2] = useState(false);
  return (
    <>
      
        <>
          <div className="dropdown-2">
            <button onClick={setDropdown2(!isdrop)}>
              <div className="dropdown-2-con">
                <img src={wallet} alt="wallet" />
                <p>0xf6...1353</p>
                <img src={dropdown} alt="drop" className="drop" />
              </div>
            </button>
            
          </div>
        </>
        {!isdrop ? <div className="down-list1">
              <p>list</p>
            </div>:null }
    </>
  );
}
