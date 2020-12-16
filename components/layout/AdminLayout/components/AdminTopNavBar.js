import React from 'react'

const AdminTopNavBar = () => {
    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar static-top shadow">
            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars"></i>
            </button>
        </nav>
    )
}

export default AdminTopNavBar
