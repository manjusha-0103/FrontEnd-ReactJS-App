import React from 'react';
import './middle.css';
import wallet from './assets/icons/Wallet.svg';
import tutorial from './assets/icons/11.svg';
import remove from './assets/icons/i-remove.svg';
import enter from './assets/icons/enter.svg';
import moneybag from './assets/icons/money-bag.svg';
import copyic from './assets/icons/ungroup.svg';
import link from './assets/icons/link.svg';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import './sidebar';
//import btc from './assets/icons/btc.svg'
//import ellipse from './assets/icons/Ellipse 134.svg'
//import Usedata from './usedata'
import SetTab from './settabs';


function Middle({theme}) {
  
  //const [tab1,setFirstTab] = useState(true);
  //const [tab2,setsecondTab] = useState(true);
  const [hidden, setHidden] = useState(true);
  const link= "https://unityexchange.design";
  const handleCopy = (link)=>{
    navigator.clipboard.writeText(link);
    alert('Copied');
  }

  

  return (
    
      <div className={theme?'middle-space-white':'middle-space'}>
        <div className={theme?'navbar-white':'navbar'}>
          <p><a href='.'>Section</a></p>
            <div className={theme?'balance-white':'balance'}>           
                
                <img src = {wallet} alt ="wallet"/> 
                  
                <p>0.2 $XYZ</p>
                <button>Tier1</button>
            </div>
        </div>
        {hidden ? 
          <>
            <div className='tutorial'>
              <div className='tuto-block'>
                  <div className='remove'>
                      <button className='remove-bt'onClick={()=>setHidden(!hidden)}>
                        <img src={remove} alt="remove"/>
                      </button>
                  </div>
                  <div className={theme? 's-sub-block-white':'s-sub-block'}>
                    <div className='sub-block'>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                      
                        <div className='bt-block'>
                          <Link to ="https://google.com">
                            <button className='tuto-bt'>Tutorial</button>
                          </Link>
                        </div>
                      
                    </div>
                   
                    <div className='tuto'>
                      <img src={tutorial} alt="tuto" />
                    </div>
                  </div>     
                </div>  
              </div>            
            </>
            :<>
                <div className={theme?'advertisement-white':'advertisement'}>
                   <button onClick={()=>setHidden(!hidden)}>ADVERTISEMENT</button>
                </div>
            </>
          }
            
          
        
       <div className={theme?'rewards-white':'rewards'}>
          
            <div className='block1'>
              
              <div className='block1-1'>
                <div className={theme?'p-1-white':'p-1'}>
                  <p >Your rewards</p>
                </div>
                
                <p className={theme?'p-2-white':'p-2'}>$ 0.26231428</p>

              </div>
              <div className='block1-2'>
                  <div className={theme?'bt-40-white':'bt-40'}>
                    <button>$40 AVAX</button>
                  </div>
                  <div className={theme?'bt-10-white':'bt-10'}>
                    <button>$10 BNB</button>
                  </div>
                  <div className={theme?'bt-210-white':'bt-210'}>
                    <button>$210 BTC</button>
                  </div>
              </div>
            </div>
            <div className='block2'>
              <div className={theme?'custom-white':'custom'}>
                <Link to="/sidebar">
                  <button >
                    <div className={'bt-content'}>
                      <img src={enter} alt="enter"/>
                      <p>Custom link</p>
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          
        </div>
        <div className='container-3'>

          <div className={theme?'container1-3-white':'container1-3'}>
            <div className={theme?'head-white':'head'}>
              <div className={theme?'money-bag-block-white':'money-bag-block'}>
                <button>
                  <img src={moneybag} alt="money" />
                </button>
              </div>
              <p>12.5% of fee</p>
              
            </div>
            <p className={theme?'xyz-white':'xyz'}>Your Referral Link for xyz</p>
            <div className={theme?'_input-white':'_input'}>
              <a href ={link}>{link}</a>
              <div className='copy'>
                <button onClick={() => {handleCopy(link);}}>
                  <img src={copyic} alt="copy" />
                </button>
                
              </div>
            </div>
          </div>

          <div className={theme?'container1-3-white':'container1-3'}>
            <div className={theme?'head-white':'head'}>
                <div className={theme?'money-bag-block-white':'money-bag-block'}>
                  <button>
                    <img src={moneybag} alt="money" />
                  </button>
                </div>
                <p>12.5% of fee</p>  
            </div>
            <p className={theme?'xyz-white':'xyz'}>Your Referral Link for xyz</p>
            <div className={theme?'_input-white':'_input'}>
              <a href ={link}>{link}</a>
              <div className='copy'>
                <button onClick={()=>handleCopy(link)}>
                <img src={copyic} alt="copy" />
                </button> 
              </div>
            </div>
          </div>
        </div>
        <SetTab theme ={theme}/> 
      </div>
    
  );
};

export default Middle
