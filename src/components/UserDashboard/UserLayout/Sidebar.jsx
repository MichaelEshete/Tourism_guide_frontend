import React from "react";
import { Link } from "react-router-dom";
import classes from "./Sidebar.module.css";
import { GiHamburgerMenu, GiCoins } from "react-icons/gi";
import { AiOutlineDashboard } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { MdPayment, MdEventAvailable } from "react-icons/md";
import { CiSquareQuestion } from "react-icons/ci";
import Additems from "../Dashboard/AddItem";

const Sidebar = () => {
  const role = localStorage.getItem("role")
  let viewItemRoute = role == "user" ?  "/ViewItem" : "/AdminViewItem"
  return (
    <div className={classes["sidebar-container"]}>
      <div className={classes["sidebar-toggler"]}>
        <i>
          <GiHamburgerMenu />
        </i>
      </div>
      <nav className={classes.sidebar}>
        <ul>
          <li>
            <Link to={"/dashboard"}>
              <AiOutlineDashboard /> &nbsp; Dashboard
            </Link>
          </li>
          
          
          {role == "user" && 
            <li>
              <Link to={"/Additem"}>
                {/* <Additems /> */}
                &nbsp; Add item
              </Link>
            </li>
          }   
          <li>
            <Link to={viewItemRoute}>
              {/* < /> */}
              &nbsp; view items
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <FiLogOut />
              &nbsp; Log Out
            </Link>
          </li>
        </ul>
      </nav>
     
    </div>
  );
};

export default Sidebar;
