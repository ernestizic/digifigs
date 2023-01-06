import React from 'react'
import { Outlet } from 'react-router-dom'
import DashboardHeader from '../components/dashboardComponents/DashboardHeader'
import Sidebar from '../components/dashboardComponents/Sidebar'

const DashboardLayout = () => {
  return (
    <div style={{background: '#fff', minHeight: '100vh'}}>
        <Sidebar />
        <div className='main-screen'>
            <DashboardHeader />
            <div className='screens-container'>
                <Outlet />
            </div>
        </div>
    </div>
  )
}

export default DashboardLayout