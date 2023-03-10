import axios from "axios";
import { useEffect } from "react";
import classes from "./UserDashboard.module.css";
import UserLayout from "../../UserDashboard/UserLayout/UserLayout";

import list from "../../../../src/img/list.png";
import {GoDiffAdded} from 'react-icons/go'
import React, { useState } from "react";
import { Link } from "react-router-dom";
const ViewItem = () => {
    const email= localStorage.getItem("email");
  var reqemail;
  const [items, setitems] = useState([]);
  var itemsname;
  console.log(email); 
  
  useEffect(() => {
    const fetchdata = async () =>{
      const data = await axios.post("http://localhost:5000/Profile", {
          email,
          ContentType: "application/json",
          Accept: "application/json",
        }); 
      console.log(data);
          console.log("pro",data.data);
          setitems(data.data  );
      console.log(items); 
      
      };
     
            fetchdata();
  }, [])
  
  return (
    <UserLayout>
      <style>
        {`
          table{
            border-spacing: 50px 25px
          }
        `}
      </style>
      
    <div className={classes["notify-container"]}>
    
      <div className={classes["notify-body"]}>
        <h2>Customer Items</h2>
        <table>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>File</th>
          </tr>
        {items.map((item, index) => (
          <tr key={index}>
              <td>{ item.title }</td>
              <td>{ item.description }</td>
              <td>
                <img src={item.file} alt="NO Image" width={"164px"}/>
              </td>
          </tr>
        )
        )}
        </table>        
      </div>
    </div>
    </UserLayout>
  );
};
export default ViewItem;