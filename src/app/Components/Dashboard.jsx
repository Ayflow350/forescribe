import React from 'react'
import Sidebar from './Sidebar'
import Main from './Main'


const Dashboard = () => {
  return (
    <div className='flex bg-[#ffff]'>
        <div className='w-[280px] h-screen  '>
            <Sidebar/>
            </div>
            <div className='flex-grow h-screen '>
             <Main/>
            </div>

    </div>
  )
}

export default Dashboard