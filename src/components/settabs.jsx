import React from 'react';
import { useState } from 'react';
import Usedata from './usedata'
import "./../components/middle.css"
import link from './assets/icons/link.svg';


const Tab=({theme}) => {
  const data = Usedata('https://raw.githubusercontent.com/akshita151199/APIs/main/data');
  const d =  String(data.state)
  const state = d.charAt(0).toUpperCase() + d.slice(1);
  //const link= "https://unityexchange.design";
  return(
    <>
    <div className='sect-1'>
      <div className={theme?'heading1-white':'heading1'}>
        <p>ASSET</p>
      </div>
      <div className={theme?'col-1-white':'col-1'}>
        <div className='b1'>
          <img src={data?.img} alt={data?.asset} />
        </div>
          <div className={theme?'b2-white':'b2'}>
            <p>{data?.asset}</p>
            <div className={theme?'b-white':'b'}>
              <p>{data?.type}</p>
              <div className='b-bt'>
                <button>
                  <img src={data.chain?.img} alt={data.chain?.name}/>
                  <p>{data.chain?.name}</p>
                </button>
              </div>
            </div>
          </div>          
        </div>
      </div>
            
      <div className='sect-2'>
        <div className={theme?'heading2-white':'heading2'}>
          <p>AMOUNT</p>
        </div>
        <div className={theme?'col-2-white':'col-2'}>
          <div className='col-2-con'>
            <p className={theme?'col-2-con-p1-white':'col-2-con-p1'}>0.0000 BNB</p>
            <p className={theme?'col-2-con-p2-white':'col-2-con-p2'}>{state}</p>
          </div>
        </div>
      </div>
      <div className='sect-3'>
        <div className={theme?'heading3-white':'heading3'}>
          <p>USER ACCOUNT</p>
        </div>
        <div className={theme?'col-3-white':'col-3'}>
          <p>{data.user}</p>
        </div>
      </div>
      <div className='sect-4'>
        <div className={theme?'heading4-white':'heading4'}>
          <p>REFFERAL EARNING</p>
        </div>
        <div className={theme?'col-4-white':'col-4'}>
          <p className={theme?'col-4-p-white':'col-4-p'}>0.000.BNB</p>
          <div className={theme?'col-4-con-white':'col-4-con'}>
            <a href='https://bscscan.com/'>
              <p>View on BSC Scan</p>
              <img src={link} alt="link" style={{color:(theme? 'white':'#33343b')}}/>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

const SetTab=({theme})=>{
  const [tabs,setTabs] = useState([
    {'label':'First Tab',value:false},
    {'label':'Second Tab',value:false}
  ]);
 

    const handleButtonsChange = ({tabs,setTabs,theme}) =>label=> {

      
        const newButtonsState = tabs.map(tabs => {
            if (tabs.label === label) {
            return (tabs = { label: tabs.label, value: true });
            }
            return {
            label: tabs.label,
            value: false
            };
        });
        setTabs(newButtonsState);
        };
        return (
          <>
          <Specialbuton {...{ tabs, setTabs, handleButtonsChange,theme }} />
          <div className="tab">
              {tabs[0].value && <Tab theme={theme}/>}
              {tabs[1].value && <div className={theme?'second-tab':'second-tab'}>Second Tab</div>}
              
          </div>
          </>
        );
      }
      const Specialbuton = ({ tabs, setTabs, handleButtonsChange,theme }) => {
      return (
      <div className={'container4-head'}>
          {tabs.map((tab, index) => (
          <button
              key={`${tab.label}-${index}`}
              onClick={() =>
              handleButtonsChange({ tabs, setTabs,theme })(tab.label)
              }
          >
              <p>{tab.label}</p>
          </button>
          ))}
      </div>
      );
  };


export default SetTab