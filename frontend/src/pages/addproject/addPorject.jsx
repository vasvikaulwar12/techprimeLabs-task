import React,{useState} from "react";
import './addProject.css';

const Addproject=()=>{
    const [windowWidth,setWindowWidth] = useState(window.innerWidth);
    const handleSize = ()=>{
        setWindowWidth(window.innerWidth);
    }


    return(
        <>
            <div className="addproject">
                <div className="header" style={{backgroundImage:"URL('./images/Header-bg.svg')"}}>
                    <div className="header-content">
                        <h1><i class="fa fa-angle-left"></i>Create Project</h1>
                        {windowWidth > 568 ?(
                    <img src="./images/Logo.svg"alt="Logo" />
                    ):(
                        <i className="fa fa-arrow-right-from-bracket fa-2xl"></i>
                    )}
                    </div>
                    <div className="addproject-form">
                        <form>
                            <div className="project-theme">
                                <input type="text" placeholder="Enter Project Theme" className="projectName"/>
                                {windowWidth > 568 ?(
                                <button className="saveproject-btn">Save Project</button>
                                ):("")
                                }
                            </div>
                            <div className="project-form">
                                <div className="input-field">
                                    <label>Reason</label>
                                    <input type="text" value="For Business"/>
                                    <i class="fa fa-angle-down"></i>
                                </div>
                                <div className="input-field">
                                    <label>Type</label>
                                    <input type="text" value="Intern"/>
                                    <i class="fa fa-angle-down"></i>
                                </div>
                                <div className="input-field">
                                    <label>Division</label>
                                    <input type="text" value="Filters"/>
                                    <i class="fa fa-angle-down"></i>
                                </div>
                                <div className="input-field">
                                    <label>Category</label>
                                    <input type="text" value="Quality A"/>
                                    <i class="fa fa-angle-down"></i>
                                </div>
                                <div className="input-field">
                                    <label>Priority</label>
                                    <input type="text" value="high"/>
                                    <i class="fa fa-angle-down"></i>
                                </div>
                                <div className="input-field">
                                    <label>Department</label>
                                    <input type="text" value="Strategy"/>
                                    <i class="fa fa-angle-down"></i>
                                </div>
                                <div className="input-field">
                                    <label>Start Date as per Project Plan</label>
                                    <input type="text" placeholder="D Month, Yr"/>
                                    <i class="fa fa-calendar-days"></i>
                                </div>
                                <div className="input-field">
                                    <label>End Date as per Project Plan</label>
                                    <input type="text" placeholder="D Month, Yr"/>
                                    <i class="fa fa-calendar-days"></i>
                                </div>
                                <div className="input-field">
                                    <label>Location</label>
                                    <input type="text" value="Pune"/>
                                    <i class="fa fa-angle-down"></i>
                                </div>
                            </div>
                            <div className="status">
                                    <label>Status:</label>
                                    <span>Registerd</span>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Addproject;