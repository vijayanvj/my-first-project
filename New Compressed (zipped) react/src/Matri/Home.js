import React,{ useEffect,useState } from 'react'
import axios from 'axios';


const Home =() => {
const [json,setJson]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:2009/api/getall',{
      headers:{'matrimonyvj': `${JSON.parse(localStorage.getItem('matrimonyvj'))}`}
  })
  .then(res=>{
    setJson(res.data);
  })
   .catch(err=>{

   })

  },[])
  return(

   <p>{JSON.stringify(json)}</p>
  )
}



export default  Home;