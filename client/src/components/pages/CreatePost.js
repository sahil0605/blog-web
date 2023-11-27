import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import '../pagecss/CreatePost.css'
import Navbar from './Navbar'
import axios from 'axios'
import { useCookies } from "react-cookie";

function CreatePost() {
const navigate = useNavigate();
const [title,setTitle] = useState("");
const [description,setDescription]= useState("");
const [cookies] = useCookies(["access_token"]);
// const [errorMessage ,setErrorMessage] = useState("");

const handleSubmit = async(event)=>{
  event.preventDefault();
  if(title.length>0 && description.length>0){
    try {
      const res = await axios.post("http://localhost:7000/api/user/postData", {
       title,
       description
      }, {
        headers: { authorization: cookies.access_token },
      });
      console.log(res)

      if (res.status=201) {
        // setSignUpSuccessful(true);
        console.log("success")
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (error) {
      console.log(error.message);
      // setErrorMessage("Error signing up. Please check your information.");
      // setTimeout(() => {
      //   setErrorMessage("");
      // }, 1000); // Remove error message after 1 second
    }
  }else{
    alert('Please fill in all fields before submitting.');
    return;
  }
}

  return (
   
    <div className='createPost'>
      <div className='form-container'>
      <h1>Create Your Post</h1>
      <form>
        <input
        type='text'
        placeholder="Write Title"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        />
      
        <textarea
        type='text'
        placeholder="Description"
        value={description}
        onChange={(e)=>setDescription(e.target.value)}
        />
        <button onClick={handleSubmit}>Post</button>
        </form>
        </div>
    </div>
   
  )
}

export default CreatePost