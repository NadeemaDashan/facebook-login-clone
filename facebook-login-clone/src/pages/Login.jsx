import React from "react";
import logo from"../assets/logo-facebook.svg"
import "./login.css"
import Axios from "axios";

export default function Login(){
        let url="http://localhost:8080/user/get"
        const [form,setForm]=React.useState({
            password:"",
            email:""

        })

        function handleChange(e){
            setForm((prevState)=>{
                return{
                    ...prevState,
                    [e.target.name]:e.target.value
                }
            })
        }
        function submitForm(e){
            e.preventDefault();
            Axios.post(url,{username:form.email,password:form.password})
            .then((res)=>console.log(res))
        }


    return(
        <div className="container">
            <div className="paragraph">
                <img src={logo} width="400px"></img>
                <p id="para">Facebook helps you connect and share<br></br> with the people in your life.</p>
            </div>
            <div className="login-container">
               <div className="login-box">
                <form onSubmit={(e)=>submitForm(e)}>
                <input
                    id="email"
                    type="text"
                    placeholder="Email address or phone Number"
                    value={form.email} 
                    name="email"
                    required
                    onChange={(e)=>handleChange(e)}
                    >   
                    </input>
                    
                    <input
                     id="password"
                    type="password"
                    placeholder="Password"
                    value={form.password}
                    name="password"
                    required
                    onChange={(e)=>handleChange(e)}
                    >
                    </input>
                    <button id="btn">Log in</button>
                    <label id="forgot-txt">  Forgotten Password</label>
                    <hr></hr>
                    <button id="btn-sign-up">Create new account</button>
                    <p>Create a page for a celebrity brand, or a business</p>
                </form>
               </div>
            </div>
        </div>
    )
}