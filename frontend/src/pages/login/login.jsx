import React, { useState } from "react";
import './login.css';
import { useNavigate } from 'react-router-dom';


const Login=({onLogin})=>{

    const [windowWidth,setWindowWidth] = useState(window.innerWidth);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSize = ()=>{
        setWindowWidth(window.innerWidth);
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        if(username === "kiran.gosavi@techprimelab.com" && password === "password"){
            onLogin();
            navigate('/dashboard');
        }
        else{
            alert("invalid credentials")

        }
    };

    return(
        <>
            {windowWidth > 568 ?(
                <>
                    <div className="container" style={{backgroundImage:"URL('./images/login-bg-1.svg')"}}>
                        <div className="logo">
                            <img src="./images/Logo.svg" alt="logo"/>
                        </div>
                        <p className="heading">Online Project Managenet</p>
                        <div className="login-container">
                            <p>Login to get started</p>
                            <form onSubmit={handleSubmit}>
                            <div className="form-login">
                                <label>Email</label>
                                <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} style={{marginBottom:"30px"}} required/>
                                <label>Password</label>
                                <div className="pass">
                                    <span className="eye-img"><img src="./images/hide-password.svg"/></span>
                                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                                </div>
                                <span className="forgetpass">Forget password?</span>
                            </div>
                            <button type="submit" className="login-btn">Login</button>
                            </form>
                            
                        </div>
                    </div>
                </>
            ):(
                <>
                <div className="mobile-view">
                    <div className="bg-img">
                        <img className="oval-img" src="./images/Oval.svg" alt="ovalimg"/>
                        <div className="logo-mobile">
                            <img src="./images/Logo.svg"/>
                            <p>Online Project Management</p>
                        </div>
                    </div>
                    <div className="login-form">
                        <p>Login to get started</p>
                        <div className="form">
                            <label>Email</label>
                            <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} style={{marginBottom:"30px"}}/>
                            <label>Password</label>
                            <div className="pass">
                                <span className="eye-img"><img src="./images/hide-password.svg"/></span>
                                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                            </div>
                            <span className="forgetpass" >Forget password?</span>
                        </div>
                        <button type="submit" className="login-btn-mobile" onClick={handleSubmit}>Login</button>
                    </div>
                    
                </div>
                </>
            )

            }
            
        </>
    )
}

export default Login;