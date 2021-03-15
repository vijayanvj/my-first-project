


import 'bootstrap/dist/css/bootstrap.min.css';
import React,{ Component } from 'react'
import Login from './Matri/Login'
import Register from './Matri/Register'
import  {Switch,Route} from 'react-router-dom'
import ProdectedRouter from './Matri/Protected'
import Home from './Matri/Home'
import { ToastContainer} from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';




const App =() => {
  return(

    <div>
   <Switch>
<Route  exact path ="/login" component ={Login}/>
<Route exact path ="/register" component ={Register}/>
<ProdectedRouter exact path ="/home" component ={Home}/>

   </Switch>
   <ToastContainer/>
    </div>
  )
}



export default  App;

