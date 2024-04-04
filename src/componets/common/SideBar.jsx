import React from 'react'
import "../../styles/sidebar.css"
const SideBar = () => {
    return (
        <div className= "sidebarContainer">
            <ul > 
                <li style={{marginBottom: "20px"}}><img width="120px" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6V5Oz-3uLDUME9P7EUSUH_XtArJIZRABeVQ&usqp=CAU'/></li>
                <li >Home</li>
                <li> Search</li>
                <li> Explore</li>
                <li> Reels</li>
                <li >Messages</li>
                <li> Notifications</li>
                <li >Create</li>
                <li> Profile</li>

            </ul>

        </div>
    )
}
export default SideBar