import React from 'react'
import { Route, useHistory } from 'react-router-dom';
import './HomePage.css'


function HomePage() {


    // const history = useHistory()

    // async function log_out() {


    //     const headers = {}
    //     headers["Content-Type"] = "application/json"
    //     const res = await fetch('/logout', {
    //         method:
    //             "GET",
    //         headers
    //     })

    //     if (res.status == 200) {

    //         history.push("/login")
    //         // console.log(await res.json());

    //     } else {
    //         console.log("data chka")

    //     }
    //     // window.location.reload()
    // }

     return (
         <>
             {/* <button className='btn_logout' onClick={log_out}>Logout</button> */}
         </>

     );
}

export default HomePage;

