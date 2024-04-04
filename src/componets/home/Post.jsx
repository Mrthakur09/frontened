import React from 'react'
import "../../styles/post.css"
import {obj, obj as postObj} from "../../data/postData"
const Post =() => {
    return (
        <div className='postContainer'>
            {
                postObj.map(obj =>{
                    return <div style={{border:"1px solid grey", padding:"10px 5px", marginBottom:"10px"}}>
                        <div class="postHeader">
                            <img src={`${obj.profilepic}`} width="30px" height="30px" style={{borderRadius:"50%"}}/>
                            <span>{obj.username}</span>
                        </div>

                        <div className='postMain'>
                            <img width="100%" src={`${obj.Postpic}`}/>
                            <span>{obj.likes} likes</span>
                            <span style={{color:"grey", marginBottom:"20px"}}></span>
                            <span>{obj.aboutPost}</span>

                        </div>
                        <div>
                            {
                            obj.comments.map(comment =>{
                                return <div style={{marginBottom:"12px"}}>
                                    <div style={{display:"flex",gap:"10px", alignItems:"center"}}>
                                    <img width="20px" height="20px" style={{borderRadius:"50%"}} src ={`${comment.profilepic}`}/>
                                    <span>{comment.username}</span>
                                    <span>{comment.Comment}</span>
                                    </div>
                                    <span style={{color:"grey",fontSize:"12px",marginLeft:"25px",marginTop:"10px"}}>{comment.likes}likes</span>
                                    </div>
                            })
                }
                </div>
                </div>
                })
            }
          
            

        </div>
    )
}
export default Post