import React,{ Component } from 'react'
import {useFormik} from 'formik'
import * as yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';

import 'bootstrap/dist/css/bootstrap.min.css';


const Login =(props) => {
const formik = useFormik({
    initialValues:{ 
      
        email:'',
        LoginPassword:''
        

    },
    validationSchema:yup.object({
      
        email: yup.string()
        .email('enter the valied email')
        .strict()
        .trim()
        .required('this field is required'),
        LoginPassword: yup.string()
        .strict()
        .trim()
        .required('this field is required'),
      

    }),
    onSubmit:(data)=>{
    console.log(data);
    axios.post('http://localhost:2009/api/login',data)
    .then (res =>{
      console.log(res);
localStorage.setItem('matrimonyvj',JSON.stringify(res.data));
    props.history.push('/Home');
  })
      .catch(err=>{
        
   })
 

    }
});




  return(
      <div className="container mt-2">
      <div className="jumbotron">
      <h4>Login</h4>
      <form autoComplete="off" onSubmit={formik.handleSubmit}>
      
      <div className="form-group">
      <label> Email</label>
       <input name="email" className="form-control" type="text" onChange={formik.handleChange} value={formik.values.email}/>
       {formik.errors.email ? <div className="text-danger">{formik.errors.email}</div> :null}
       </div>
        <div className="form-group">
      <label> LoginPassword</label>
       <input name="LoginPassword" className="form-control" type="text" onChange={formik.handleChange} value={formik.values.LoginPassword}/>
       {formik.errors.LoginPassword ? <div className="text-danger">{formik.errors.LoginPassword}</div> :null}
       </div>
       
        <div className="d-flex justify-content-between">
         <button className="btn btn-primary" type ="submit">submit </button>
         <a
         href= "#"
         onClick={()=> {
              window.location.href ='Register';
         }}
         
         >
          Register
          </a>
          </div>
       </form>
      </div>
       </div>
        

    )

}


export default  Login;