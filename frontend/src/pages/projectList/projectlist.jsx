import React, {useState} from "react";
import './projectlist.css';

const Projectlist=()=>{

    const [windowWidth,setWindowWidth] = useState(window.innerWidth);
    const handleSize = ()=>{
        setWindowWidth(window.innerWidth);
    }

    const Project_list=[
        {
            name:"Line Filter",
            date:"Jun-21,2020 to Jan-01,2021",
            reason:"Business",
            type:"Internal",
            division:"Compressor",
            category:"Quality A",
            priority:"High",
            dept:"Strategy",
            location:"Pune",
            status:"Running"
        },
        {
            name:"Stiker Management",
            date:"Jan-01,2021 to Jan-31,2021",
            reason:"Dealership",
            type:"external",
            division:"Filter",
            category:"Quality b",
            priority:"Low",
            dept:"Finance",
            location:"Delhi",
            status:"Running"
        },
        {
            name:"Pumps Connector",
            date:"Feb-01,2021 to July-31,2021",
            reason:"Transport",
            type:"Internal",
            division:"Compressor",
            category:"Quality c",
            priority:"Medium",
            dept:"Quality",
            location:"Mumbai",
            status:"Registerd"
        },
        {
            name:"Wall Reflector",
            date:"Mar-05,2021 to Dec-31,2021",
            reason:"Business",
            type:"Venders",
            division:"Pumps",
            category:"Quality A",
            priority:"High",
            dept:"Maintanance",
            location:"Pune",
            status:"Cancelled"
        },
        {
            name:"Tank Filter",
            date:"Jan-01,2021 to Nov-20,2021",
            reason:"Business",
            type:"External",
            division:"Glass",
            category:"Quality A",
            priority:"High",
            dept:"Stores",
            location:"Mumbai",
            status:"Registred"
        },
        {
            name:"Water Heater",
            date:"July-01,2021 to Nov-20,2022",
            reason:"Dealership",
            type:"Vender",
            division:"Compressor",
            category:"Quality D",
            priority:"Low",
            dept:"Finance",
            location:"Pune",
            status:"Cancelled"
        },
        {
            name:"Large Mixer",
            date:"Feb-01,2021 to Oct-20,2022",
            reason:"Transport",
            type:"External",
            division:"Water Heater",
            category:"Quality A",
            priority:"Low",
            dept:"Stores",
            location:"Delhi",
            status:"Closed"
        }        
    ]

    return(
        <>
         {windowWidth > 568 ?(
            <>
            <div className="addproject">
                <div className="header" style={{backgroundImage:"URL('./images/Header-bg.svg')"}}>
                    <div className="header-content">
                        <h1><i class="fa fa-angle-left"></i> Project Listing</h1>
                        <img src="./images/Logo.svg" alt="Logo" />
                    </div>
                    <div className="list">
                        <div className="filter">
                            <div className="searchbar">
                                <i class="fa fa-magnifying-glass"></i>
                                <input type="text" placeholder="Search"/>
                            </div>
                            <div className="sortbar">
                                <label >Sort By:</label>
                                <span>Priority <i class="fa fa-angle-down"></i></span>
                            </div>
                        </div>
                        <div className="table-content">
                    <table>
                        <tr>
                            <th style={{width:"20%"}}>Projcet Name</th>
                            <th style={{width:"8%"}}>Reason</th>
                            <th style={{width:"8%"}}>Type</th>
                            <th style={{width:"8%"}}>Division</th>
                            <th style={{width:"8%"}}>Category</th>
                            <th style={{width:"7%"}}>Priority</th>
                            <th style={{width:"7%"}}>Dept.</th>
                            <th style={{width:"7%"}}>Location</th>
                            <th style={{width:"8%"}}>Status</th>
                            <th style={{width:"23%"}}></th>
                        </tr>
                        {Project_list.map((val)=>{
                            return(
                                <>
                                     <tr>
                                        <td>
                                            <p><b>{val.name}</b></p>
                                            <p>{val.date}</p>
                                        </td>
                                        <td>{val.reason}</td>
                                        <td>{val.type}</td>
                                        <td>{val.division}</td>
                                        <td>{val.category}</td>
                                        <td>{val.priority}</td>
                                        <td>{val.dept}</td>
                                        <td>{val.location}</td>
                                        <td><b>{val.status}</b></td>
                                        <td>
                                            <button>Start</button>
                                            <button>close</button>
                                            <button>cancle</button>
                                        </td>
                                    </tr>
                                </>
                            )
                           
                        })

                        }
                        
                    </table>
                </div>
                    </div>
                </div>
                
            </div>
            </>
         ):(
            <>
            <div className="mobile-content">
                <div className="mobile-header">
                    <img src="./images/Oval.svg" alt="ovel" />
                    <div className="mobile-heading">
                    <h1>Project Listing</h1>
                    <i className="fa fa-arrow-right-from-bracket fa-2xl"></i>
                    </div>
                </div>
                <div className="mobile-filter">
                    <div className="searchbar">
                        <i class="fa fa-magnifying-glass"></i>
                        <input type="text" placeholder="Search"/>
                    </div>
                    <div className="sortbar">
                    <i class="fa-solid fa-bars fa-xl"></i>
                    </div>
                   
                </div>
                {Project_list.map((val)=>{
                    return(
                        <>
                            <div className="project-card">
                        <div className="card-heading">
                            <div>
                                <p><b>{val.name}</b></p>
                                <p>{val.date}</p>
                            </div>
                            <div>
                                <p><b>{val.status}</b></p>
                            </div>
                        </div>
                        <div className="card-content" style={{width:"100%"}}>
                            <p>Reason:<span>{val.reason}</span></p>
                            <p>Type:<span>{val.type}</span> &nbsp; <i class="fa-solid fa-circle fa-2xs"></i>Category:<span>{val.category}</span></p>
                            <p>Div:<span>{val.division}</span>&nbsp;<i class="fa-solid fa-circle fa-2xs"></i>Dept: <span>{val.dept}</span></p>
                            <p>Location:<span>{val.location}</span></p>
                            <p>Priority:<span>{val.priority}</span></p>
                        </div>
                        <div className="card-btn">
                            <button>Start</button>
                            <button>Closed</button>
                            <button>Cancle</button>
                        </div>
                    </div>
                        </>
                    )
                })

                }
            </div>
            </>
         )
        }
        </>
    )
}

export default Projectlist;