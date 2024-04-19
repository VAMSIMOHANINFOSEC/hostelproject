import React from "react";
import Navbaradmin from "../../Components/admin/navbaradmin";
import Footer from "../../Components/home/fotter";

const AdminDashboard = ()=> {
    return(
        <>  

              <Navbaradmin/>

        <body style={{paddingBottom:"48%"}}>   
             <div>

         <h1>Admin Dashboard</h1>
            </div>
        </body>
        <div style={{position:"absolute", left:"0", right:"0",bottom:"0"}}>
            <Footer/>

     </div>

        </>
    )
}
export default AdminDashboard;