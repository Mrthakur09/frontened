import React from "react";
const Savedstatus =({savedstatus}) => {
    return (
        <div style={{display:"flex",marginTop:"2vh",gap:"10vh",marginLeft:"10vh"}}>
            {savedstatus.map((status)=>{
                return <div style={{display:"flex",flexDirection:"column",alignItems:"centre"}}>
                    <img src={`${status.status[1]}`} alt="" style={{width:"10vh",height:"10vh",borderRadius:"50%"}}/>
                    <span>{status.statusName}</span>
                </div>
            }
            )}


        </div>
    )
}
export default Savedstatus