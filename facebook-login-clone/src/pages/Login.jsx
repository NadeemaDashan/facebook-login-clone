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
                    <input type="text"></input>
               </div>
            </div>
        </div>
    )
}