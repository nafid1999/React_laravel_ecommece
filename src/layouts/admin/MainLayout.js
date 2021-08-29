import React from 'react'
import "../../assets/admin/css/styles.css"
import "../../assets/admin/js/scripts"

import Footer from './Footer';
import Navbar from "./Navbar";
import SideBar from './SideBar';

const MainLayout = (props) => {

    console.log(props)
    return (
        <div className="sb-nav-fixed">
             <Navbar/>
             <div id="layoutSidenav">

                <div id="layoutSidenav_nav">
                    <SideBar/>
                </div>

                <div id="layoutSidenav_content">
                    <main>
                        {"ff"}
                    </main>
                    <Footer/>
                </div>


             </div>

        </div>
    )
}

export default MainLayout
