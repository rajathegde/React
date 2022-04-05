import React from 'react'
import Filter from '../../assets/filter.png';
import Search from '../../assets/search.png';
import { Table } from '@mui/material';
import EnhancedTable from './EnhancedTable';

const DashboardChildren = ({ width, height }) => {
  return (
    <div style={{ width: "80%", padding: "10px 25px", boxSizing: "border-box", backgroundColor: "#E5E5E5" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <h3>View Product</h3>

      </div>

      <div style={{ marginTop: "20px" }}>
        <EnhancedTable />
      </div>
    </div>
  )
}

export default DashboardChildren