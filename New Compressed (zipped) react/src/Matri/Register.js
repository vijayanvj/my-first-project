import React, { Component } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';

import 'bootstrap/dist/css/bootstrap.min.css';


const Registor = (props) => {
        const formik = useFormik({
            initialValues: {
                Name: '',
                email: '',
                LoginPassword: '',
                confirmloginpassword: '',
                State: '',
                mobilenumber: '',
                caste: '',
                mothertongue:'',

            },
            validationSchema: yup.object({
                Name: yup.string()
                    .strict()
                    .trim()
                    .required('this field required'),
                email: yup.string()
                    .email('enter the valied email')
                    .strict()
                    .trim()
                    .required('this field is required'),
                LoginPassword: yup.string()
                    .strict()
                    .trim()
                    .required('this field is required'),
                confirmloginpassword: yup.string()
                    .oneOf([yup.ref('LoginPassword'), null], 'must be same')
                    .required('this field is required'),
                State: yup.string()
                    .strict()
                    .trim()
                    .required('this field required'),
                mobilenumber: yup.string()
                    .strict()
                    .trim()
                    .required('this field required'),
                caste: yup.string()
                    .strict()
                    .trim()
                    .required('this field required'),
                    mothertongue: yup.string()
                    .strict()
                    .trim()
                    .required('this field required'),

            }),
            onSubmit: (data) => {
                console.log(data);
                axios.post('http://localhost:2009/api/register', data)
                    .then(res => {
                        props.history.push('/login');
                    })
                    .catch(err => {
                        toast.error(err.responce.data);
                    })


            }
        });




        return (



                <
                div className = "container mt-2" >
                <
                div className = "jumbotron" >
                <
                h4 > Register < /h4> <
                form autoComplete = "off"
                onSubmit = { formik.handleSubmit } >
                <
                div className = "form-group" >
                <
                label > Firstname: < /label> <
                input type = "text"
                name = "Name"
                className = "form-control"
                onChange = { formik.handleChange }
                value = { formik.values.Name }
                /> {
                    formik.errors.Name ? < div className = "text-danger" > { formik.errors.Name } < /div>  :
                        null
                } <
                /div> <
                div className = "form-group" >
                <
                label > Email < /label> <
                input name = "email"
                className = "form-control"
                type = "text"
                onChange = { formik.handleChange }
                value = { formik.values.email }
                /> {
                    formik.errors.email ? < div className = "text-danger" > { formik.errors.email } < /div> :null} <
                        /div> <
                        div className = "form-group" >
                        <
                        label > LoginPassword < /label> <
                        input name = "LoginPassword"
                    className = "form-control"
                    type = "text"
                    onChange = { formik.handleChange }
                    value = { formik.values.LoginPassword }
                    /> {
                        formik.errors.LoginPassword ? < div className = "text-danger" > { formik.errors.LoginPassword } < /div> :null} <
                            /div> <
                            div className = "form-group" >
                            <
                            label > ConfirmLoginPassword < /label> <
                            input name = "confirmloginpassword"
                        className = "form-control"
                        type = "text"
                        onChange = { formik.handleChange }
                        value = { formik.values.confirmloginpassword }
                        /> {
                            formik.errors.confirmloginpassword ? < div className = "text-danger" > { formik.errors.confirmloginpassword } < /div> :null} <
                                /div> <
                                div className = "form-group" >
                                <
                                label > State < /label> <
                                input name = "State"
                            className = "form-control"
                            type = "text"
                            onChange = { formik.handleChange }
                            value = { formik.values.State }
                            /> {
                                formik.errors.State ? < div className = "text-danger" > { formik.errors.State } < /div> :null} <
                                    /div> <
                                    div className = "form-group" >
                                    <
                                    label > Mobilenumber < /label> <
                                    input name = "mobilenumber"
                                className = "form-control"
                                type = "text"
                                onChange = { formik.handleChange }
                                value = { formik.values.mobilenumber }
                                /> {
                                    formik.errors.mobilenumber ? < div className = "text-danger" > { formik.errors.mobilenumber } < /div> :null} <
                                        /div> <
                                        div className = "form-group" >
                                        <
                                        label > caste < /label> <
                                        input name = "caste"
                                    className = "form-control"
                                    type = "text"
                                    onChange = { formik.handleChange }
                                    value = { formik.values.caste }
                                    /> {
                                        formik.errors.caste ? < div className = "text-danger" > { formik.errors.caste } < /div> :null} <
                                            /div>
                                            < div className = "form-group" >
                                
                                  <
                                    label > mothertongue < /label> <
                                    input name = "mothertongue"
                                className = "form-control"
                                type = "text"
                                onChange = { formik.handleChange }
                                value = { formik.values.mothertongue }
                                /> {
                                    formik.errors.mothertongue ? < div className = "text-danger" > { formik.errors.mothertongue } < /div> :null} <
                                        /div>
                                       < div className = "d-flex justify-content-between" >
                                            <
                                            button className = "btn btn-primary"
                                        type = "submit" > submit < /button> <
                                            a
                                        href = "#"
                                        onClick = {
                                            () => {
                                                window.location.href = 'Login';
                                            }
                                        }

                                        >
                                        Login
                                            <
                                            /a> <
                                            /div> <
                                            /form> <
                                            /div> <
                                            /div>


                                    )

                                }


                                export default Registor;