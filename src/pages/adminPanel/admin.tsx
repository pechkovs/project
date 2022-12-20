import React from 'react'
import Charts from '../../features/AdminPanelFeatures/Chart/Charts'
import { AdminPageBody } from './admin.style'
//import Summary from '../../features/AdminPanelFeatures/Summarybox/Summary'

const AdminPage = () => {
    return (
        <>
            <AdminPageBody
                src={`${__webpack_public_path__}remote-assets/About_us_bgr1.jpeg`}
                alt="AdminPageBodyBgr"
            />
            {/* <Summary /> */}
            <Charts />
        </>
    )
}
export default AdminPage
