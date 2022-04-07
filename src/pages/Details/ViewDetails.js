import React from 'react'
import Filter from '../../assets/filter.png';
import Search from '../../assets/search.png';
import { Table } from '@mui/material';
import Details from './Details';

const DashboardChildren = ({ width, height }) => {
  return (
    <div style={{ width: "100%", padding: "10px 100px", boxSizing: "border-box", backgroundColor: "#E5E5E5" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <h3>View Product</h3>

      </div>

      <div style={{ marginTop: "20px" }}>
        <Details />

      </div>
    </div>
  )
}

export default DashboardChildren