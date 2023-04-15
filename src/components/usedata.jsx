import { useState, useEffect } from 'react';
import './middle.css';


function Usedata(url) {
  //const url = 'https://raw.githubusercontent.com/akshita151199/APIs/main/data';
  
  const [data, setData] = useState([]);
  //const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json.data[0]);
      
        console.log(json.data[0].chain.img);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [url]);

  return data


}

export default Usedata;