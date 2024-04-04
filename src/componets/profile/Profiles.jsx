import React from "react";
import SideBar from "../common/SideBar";
import Header from "./Header";
import Mypost from "./Mypost";
import { myInfo } from "../../data/myinfo";
const PROFILE = () => {
    return(
        <div style={{display:"flex", gap:"15vw",fontSize:"12px" }}>
             <SideBar/>
             <div>
                <Header myInfo={myInfo} ></Header>
                <Mypost post={myInfo.posts}></Mypost>
                </div>
            
            
         
            

        </div>
    )
}

export default PROFILE