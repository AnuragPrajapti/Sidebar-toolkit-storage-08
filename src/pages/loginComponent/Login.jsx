import React, { useContext, useState , useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import { loginData } from '../../redux-Toolkit/reducer/createSlice'
import { NavLink } from 'react-router-dom'
import { toast , ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import NoteContext from '../../Context/NoteContext'
import backgroundImage from '../../Images/backgroundImage.jpg'

const Login = () => {
  
  const title = useContext(NoteContext)
   useEffect(() => {
     title.setTitle("Login Component..")
  },[])
   
   const dispatch = useDispatch()
   const navigate = useNavigate() 
   const [inpval, setInpval] = useState({
    email : "",
    password : ""
   })
     
   const authLoginData = useSelector( state => state.users)
   
   const handleLogin = (e) => {
     e.preventDefault();
     const  userData = JSON.parse(localStorage.getItem("register"));
     userData.filter((e) => {
      if(e.email === inpval.email && e.password === inpval.password )
       {
         toast.success("User Login Successfully!!",{
         position : "top-center"
         })
         navigate('/deshboard')
         dispatch(loginData(inpval))
       }
      else {
          toast.error("Plz Enter A valid Details!",{
            position : "top-center"
          })
      }
    })
   }
  
  return (
    <div className='container_Wrapper' style={{backgroundImage: `url(${backgroundImage})`}} >
      <div className='container' style={{width : '100%'}}>
        <form className="container-body">
            <div className='headingWrapper' >
             <h3>Login Here!!</h3>
            </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name='email'
              value={inpval.email}
              onChange={(e) => setInpval({ ...inpval,email: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password"
              className="form-control"
              id="exampleInputPassword1"
              name='password'
              value={inpval.password}
              onChange={(e) => setInpval({ ...inpval,password: e.target.value })}
            />
            <div id="emailHelp" className="form-text">We'll never share your password with anyone else.</div>
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleLogin} >Login</button>
        <p className='mt-3'>Don't Have an Account?<span><NavLink to="/register">Register</NavLink></span> </p>
        </form>
         <div className="image">
         <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
         </div>
       </div>
          <ToastContainer />
    </div>
  )
}

export default Login;