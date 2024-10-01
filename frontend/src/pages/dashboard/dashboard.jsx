import React, { useState } from "react";
import "./dashboard.css"


const Dashboard =()=>{

    const [windowWidth,setWindowWidth] = useState(window.innerWidth);
    const handleSize = ()=>{
        setWindowWidth(window.innerWidth);
    }

    return(
        <>
        <div className="dashboard-container">
            <div className="header" style={{backgroundImage:'URL("./images/Header-bg.svg")'}}>
                <div className="header-content">
                    <h1>Dashboard</h1>
                    {windowWidth > 568 ?(
                    <img src="./images/Logo.svg"alt="Logo" />
                    ):(
                        <i className="fa fa-arrow-right-from-bracket fa-2xl"></i>
                    )}
                </div>
                <div className="count-card">
                    <div className="card">
                        <p>Total Project</p>
                        <h1>8</h1>
                    </div>
                    <div className="card">
                        <p>Closed</p>
                        <h1>2</h1>
                    </div>
                    <div className="card">
                        <p>Running</p>
                        <h1>3</h1>
                    </div>
                    <div className="card">
                        <p>Closure Delay</p>
                        <h1>2</h1>
                    </div>
                    <div className="card">
                        <p>Cancelled</p>
                        <h1>3</h1>
                    </div>
                </div>
            </div>
            <div className="graph">
                <p>Department wise-Total Vs Close</p>
                    <div className="graphimg">
                        <img src="./images/graph.png" alt="graph" />
                    </div>
            </div>
            
        </div>
        </>
    )
}

export default Dashboard;