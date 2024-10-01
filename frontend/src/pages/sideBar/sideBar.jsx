import React, { useState } from "react";
import './sideBar.css';
import { Link, NavLink } from "react-router-dom";

const SideBar =()=>{
    const [windowWidth,setWindowWidth] = useState(window.innerWidth);

    const [image,setimage] = useState("clock")
    // const [plus,setplus] = useState(false)
    // const [list,setlist] = useState(false)

    const handleSize = ()=>{
        setWindowWidth(window.innerWidth);
    }
    
    // const activepage =()=>{
    //     setclock("clock")
    // }

    return(
        <>
        {windowWidth > 568 ?(
            <>
            <div className="sidebar">
                <div className="sidebar-container">
                    <div className={image === "clock" ? "side-bar-image active":"side-bar-image "} >
                     <Link to="/dashboard"><img onClick={()=>{setimage("clock")}} src={image === "clock" ? "./images/Dashboard-active.svg" :"./images/Dashboard.svg"} alt="dashboard" /></Link>
                    </div>
                    <div className={image === "list" ? "side-bar-image active":"side-bar-image "} >
                        <Link to="/projectlist"><img onClick={()=>{setimage("list");}}src={image ==="list" ? "./images/Project-list-active.svg" :"./images/Project-list.svg"} alt="projectlist"/></Link>
                    </div>    
                    <hr/>
                    <div className={image === "plus" ? "side-bar-image active":"side-bar-image "} >
                        <Link to="/addproject"><img onClick={()=>{setimage("plus");}}src={image ==="plus" ? "./images/create-project-active.svg" :"./images/create-project.svg"} alt="addproject" /></Link>    
                    </div> 
                </div>
                <div className="logout">
                    <img src="./images/Logout.svg" alt="logout" />
                </div>
            </div>
            </>
            ):(
                <>
                    <div className="bottom-bar">
                        <div className={image === "clock" ? "actived":""} >
                            <Link to=  "/dashboard"><img onClick={()=>{setimage("clock")}} src={image === "clock" ? "./images/Dashboard-active.svg" :"./images/Dashboard.svg"} alt="dashboard" /></Link>
                        </div>
                        <div className={image === "list" ? "actived":""} >
                            <Link to="/projectlist"><img onClick={()=>{setimage("list");}}src={image ==="list" ? "./images/Project-list-active.svg" :"./images/Project-list.svg"} alt="projectlist"/></Link>
                        </div>    
                        <div className={image === "plus" ? "actived":""} >
                            <Link to="/addproject"><img onClick={()=>{setimage("plus");}}src={image ==="plus" ? "./images/create-project-active.svg" :"./images/create-project.svg"} alt="addproject" /></Link>    
                        </div> 
                    </div>
                </>
            )
        }
                
        </>
    )
};

export default SideBar;