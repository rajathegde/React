import React, { useEffect, useState } from 'react'
import Filter  from '../../assets/filter.png';
import Search from '../../assets/search.png';
import { Modal, Table } from '@mui/material';
import EnhancedTable from './EnhancedTable';





const DashboardChildren = ({width , height}) => {
  const [filterModal , setOpenModalFilter] = useState(false);
  const options1 = [{name: "Enter Make"}, ]
  const options2 = [{name: "Enter Model "}, {name: "model"},{name: "model"},]
  const options3 = [{name: "Enter Fuel Type"}, {name: "Enter Fuel Type"},{name: "Enter Fuel Type"},]
  const options4 = [{name: "Enter Category"}, ]

  return (
    <div style={{ width:"80%" , height : height -70 , padding:"10px 50px" , boxSizing:"border-box"  , backgroundColor:"#E5E5E5"}}>
         <div style={{display:"flex"  , alignItems:"center"  , justifyContent:"space-between" }}>
               <h3>Vehicle Mapping</h3>
               
               <button
              
              style={{
                backgroundColor: "#1E4597",
                width: "200px",
                height: "50px",
                border: "1px solid #1E4597",
                marginLeft: "20px",
                color: "#FFFFFF",
                cursor: "pointer",
              }}
              onClick={() =>  setOpenModalFilter(true)}
            >
              Create
            </button>
               
               
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
                placeholder="Search by make, model etc"
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
                <p>Create Vehicle</p>
            </div>

            
                <input  type="input"  placeholder="make" style={{ outline:"none" , width: "100%" , height: "50px" , border:"1px solid grey"  , padding: "0px 10px" , marginBottom:"10px"}}  />
                
                
                <select  type="select"   style={{ outline:"none" , width: "100%" , height: "50px" , border:"1px solid grey"  , padding: "0px 10px", marginBottom:"10px"}}  >
                {options2 &&
              options2.map((option, index) => {
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
                {options3 &&
              options3.map((option, index) => {
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
                {options4 &&
              options4.map((option, index) => {
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
              Cancel
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
              Create
            </button>
            </div>
          </div>
        </Modal>
      )}

    </div>
  )
}

export default DashboardChildren