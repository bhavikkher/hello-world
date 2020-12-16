import React from 'react'
import AdminSidebar from './components/AdminSidebar'
import AdminTopNavBar from './components/AdminTopNavBar'

const AdminLayout = ({ children }) => {
    return (
        <div id="wrapper">
            <AdminSidebar />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <AdminTopNavBar />
                    <div className="container-fluid">
                        {children}
                    </div>
                </div>
                <footer className="sticky-footer bg-white">
                    <div className="container my-auto">
                        <div className="copyright text-center my-auto">
                            <span>Copyright &copy; <a href="/">Hello World</a> 2020</span>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default AdminLayout
