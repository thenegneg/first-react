import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Update from "./Update"

function Edit() {
  const {id}=useParams()
  const [post,setPost]=useState(null)
  const fetchPost=async()=>{
      try {
          const res=await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
          setPost(res.data)
      } catch (error) {
       console.log(error.message);   
      }
  }
  useEffect(()=>{
      fetchPost()
  },[])
  return (
    <>
       <div className="">
           {post && <Update post={post} />}
       </div>
    </>
  )
}

export default Edit