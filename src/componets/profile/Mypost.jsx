import React from "react";


const Mypost= ({post}) =>{
    return( 
        <div>
            <div style={{padding:"2vh 0vh", marginTop:"5vh", borderTop:"1px solid grey", display:"flex",justifyContent:"center", gap:"5vh",textTransform:"uppercase"}}>
                
                <span>Posts</span>
                <span>Reels</span>
                <span>Saved</span>
                <span>Tagged</span>
            </div>
    <div style={{display:"grid",gridTemplateColumns:"auto auto auto",columnGap:"1vh",rowGap:"1vh"}}>
        {post.map((ele)=>{
        return <img src={`${ele.postImages[0]}`} alt=" " style={{width:"400px",height:"300px", objectFit:"cover"}}></img>
        })

        }


    </div>
    </div>

    )
}
export default Mypost