import React from "react";
import logo from"../assets/logo-facebook.svg"
import "./login.css"

export default function Login(){
    return(
        <div className="container">
            <div className="paragraph">
                <img src={logo} width="400px"></img>
                <p id="para">Facebook helps you connect and share<br></br> with the people in your life.</p>
            </div>
            <div className="login-container">
               <div className="login-box">
                    <input id="email" type="text" placeholder="Email address or phone Number"></input>
                    <input type="password" placeholder="Password"></input>
                    <button id="btn">Log in</button>
                    <label id="forgot-txt">  Forgotten Password</label>
                    <hr></hr>
                    <button id="btn-sign-up">Create new account</button>
                    <p>Create a page for a celebrity brand, or a business</p>
               </div>
            </div>
        </div>
    )
}