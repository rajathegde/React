import React, { useState } from 'react'
import Filter  from '../../assets/filter.png';
import Search from '../../assets/search.png';
import { Modal, Table } from '@mui/material';
import EnhancedTable from './EnhancedTable';

const Filterproduct = ({width , height}) => {
  const [filterModal , setOpenModalFilter] = useState(false);

  const options = [{name: "option1"}, {name: "option1"},{name: "option1"},]
  return (
    <div style={{ width:"80%" , height : height -70 , padding:"10px 50px" , boxSizing:"border-box"  , backgroundColor:"#E5E5E5"}}>
         <div style={{display:"flex"  , alignItems:"center"  , justifyContent:"space-between" }}>
               <h3>Products</h3>
               <div style={{width:"40px" , height : "40px" , borderRadius:"60px" , backgroundColor:"#1E4597", display:"flex"  , alignItems:"center", justifyContent:"center"}}>
                   <img src={Filter}  style={{width:"20px" , height:"20px" , objectFit:"contain"}} onClick={() =>  setOpenModalFilter(true)}/>
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


         {filterModal && (
        <Modal
          open={filterModal}
          onClose={() => setOpenModalFilter(false)}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "0px solid gray",
          }}
        >
          <div
            style={{
              width: "500px",
              boxSizing: "border-box",
              outline: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              flexDirection: "column",
              padding: "15px"
            }}
          >
              
            <div style={{width: "100%" }}>
                <p>Filter Products</p>
            </div>

            
                <select  type="select"   style={{ outline:"none" , width: "100%" , height: "50px" , border:"1px solid grey"  , padding: "0px 10px" , marginBottom:"10px"}}  >
                {options &&
              options.map((option, index) => {
                return (
                  <option
                    key={index}
                    className="title"
                    style={{
                      color: "black",
                      backgroundColor: "white",
                    }}
                    value={option.name}
                  >
                    {option.name}
                  </option>
                );
              })}
                </select>
                <select  type="select"   style={{ outline:"none" , width: "100%" , height: "50px" , border:"1px solid grey"  , padding: "0px 10px", marginBottom:"10px"}}  >
                {options &&
              options.map((option, index) => {
                return (
                  <option
                    key={index}
                    className="title"
                    style={{
                      color: "black",
                      backgroundColor: "white",
                    }}
                    value={option.name}
                  >
                    {option.name}
                  </option>
                );
              })}
                </select>
                <select  type="select"   style={{ outline:"none" , width: "100%" , height: "50px" , border:"1px solid grey"  , padding: "0px 10px", marginBottom:"10px"}}  >
                {options &&
              options.map((option, index) => {
                return (
                  <option
                    key={index}
                    className="title"
                    style={{
                      color: "black",
                      backgroundColor: "white",
                    }}
                    value={option.name}
                  >
                    {option.name}
                  </option>
                );
              })}
                </select>
                
            <div>

            <button
              style={{
                width: "220px",
                height: "50px",
                border: "1px solid #1E4597",
                color: "#1E4597",
                cursor: "pointer",
                backgroundColor: "white",
              }}
              onClick={() => setOpenModalFilter(true)}
            >
              Clear
            </button>

            <button
              style={{
                backgroundColor: "#1E4597",
                width: "220px",
                height: "50px",
                border: "1px solid #1E4597",
                marginLeft: "20px",
                color: "#FFFFFF",
                cursor: "pointer",
              }}
            >
              Filter
            </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}

export default Filterproduct