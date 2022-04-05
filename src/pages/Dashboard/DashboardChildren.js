import React from 'react'
import Filter  from '../../assets/filter.png';
import Search from '../../assets/search.png';
import { Table } from '@mui/material';
import EnhancedTable from './EnhancedTable';

const DashboardChildren = ({width , height}) => {
  return (
    <div style={{ width:"80%" , height : height -70 , padding:"10px 50px" , boxSizing:"border-box"  , backgroundColor:"#E5E5E5"}}>
         <div style={{display:"flex"  , alignItems:"center"  , justifyContent:"space-between" }}>
               <h3>Products</h3>
               <div style={{width:"40px" , height : "40px" , borderRadius:"60px" , backgroundColor:"#1E4597", display:"flex"  , alignItems:"center", justifyContent:"center"}}>
                   <img src={Filter}  style={{width:"20px" , height:"20px" , objectFit:"contain"}}/>
               </div>
               
         </div>
         <div
              style={{
                height: "60px",
                width: "100%",
                boxSizing: "border-box",
                outline: "none",
                display: "flex",
                alignItems: "center",
                padding: "0px 15px",
                backgroundColor:"white",
                marginTop:"15px",
                borderRadius: "10px"
              }}
            >
             
              <input
                type="text"
                placeholder="Search by Product Id, Name, Make, Model etc"
                style={{
                  border: "0px solid black",
                  padding: "0px",
                  boxSizing: "border-box",
                  outline: "none",
                  width: "98%",
                  marginLeft: "10px",
                }}
                
              />
               <img src={Search} style={{ objectFit: "contain" }} />
            </div>
         <div style={{marginTop:"20px"}}>
            <EnhancedTable />      
         </div>
    </div>
  )
}

export default DashboardChildren