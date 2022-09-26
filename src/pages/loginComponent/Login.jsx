import React, { useContext, useState , useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import { loginData } from '../../redux-Toolkit/reducer/createSlice'
import { NavLink } from 'react-router-dom'
import { toast , ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import NoteContext from '../../Context/NoteContext'

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
  const handleLogin = (e) => {
    e.preventDefault();
    const  userData = JSON.parse(localStorage.getItem("register"));
    userData.filter((e) => {
      if (e.email === inpval.email && e.password === inpval.password )
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
    <div>
      <div className='header'>
        <h1 align="center" >Login Here!!</h1> <hr />
      </div>
      <div className='container-body'>
        <form>
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
        </form>
        <p className='mt-3'>Don't Have an Account?<span><NavLink to="/register">Register</NavLink></span> </p>
       </div>
          <ToastContainer />
    </div>
  )
}

export default Login;