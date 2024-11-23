import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashbboard = (props) => {
    return (
        <div className="p-5 bg-gradient-to-br from-black to-gray-900 min-h-screen text-white">
    <Header changeUser={props.changeUser}/>
    <CreateTask/>
    <AllTask/>
</div>

    )
}

export default AdminDashbboard
