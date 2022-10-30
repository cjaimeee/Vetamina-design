import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaCalendar,
    FaPen,
    FaTools,
    FaArrowLeft
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';



const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/about",
            name:"About",
            icon:<FaUserAlt/>
        },
        {
            path:"/analytics",
            name:"Appointments",
            icon:<FaCalendar/>
        },
        {
            path:"/comment",
            name:"Medical Records",
            icon:<FaPen/>
        },
        {
            path:"/product",
            name:"Services",
            icon:<FaTools/>
        },
        {
            path:"/productList",
            name:"Logout",
            icon:<FaArrowLeft/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "440px" : "60px"}} className="sidebar">
               <div className="top_section">
                   <img style={{display: isOpen ? "block" : "none"}} src="./images/logo.png" alt="" />
                   <div style={{marginLeft: isOpen ? "50px" : "0px", paddingTop: "10px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;