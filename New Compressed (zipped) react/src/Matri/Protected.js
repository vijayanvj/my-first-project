import React,{ Component } from 'react'
import {Route,Redirect} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';


const ProdectedRouter =({component,...rest})=>{

let RenderComponents = component;

let hasToken=JSON.parse(localStorage.getItem('matrimonyvj'));
console.log(hasToken);
return(
    <Route
    {...rest}
    render={
        props=>{
          return hasToken !==null ? (
             <RenderComponents {...props}/>
         ) :(
             <Redirect
             to ={{
                 pathname:'Login'
             }}
             />
         )
        }
    }
    
    
    
    />
)
}
export default ProdectedRouter;


