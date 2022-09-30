import React, { useContext, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import { loginData } from '../../redux-Toolkit/reducer/createSlice'
import { NavLink } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import NoteContext from '../../Context/NoteContext'
import backgroundImage from '../../Images/backgroundImage.jpg'
import Icon from 'react-icons-kit';
import { eye } from 'react-icons-kit/feather/eye'
import { eyeOff } from 'react-icons-kit/feather/eyeOff'

const Login = () => {

  const title = useContext(NoteContext)
  useEffect(() => {
    title.setTitle("Login Component..")
  }, [title])

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [inpval, setInpval] = useState({
    email: "",
    password: ""
  })

  //  const authLoginData = useSelector( state => state.users)

  const handleLogin = (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem("register"));
    userData?.filter((ele) => {
      if (ele.email === inpval.email && ele.password === inpval.password) {
        toast.success("User Login Successfully!!", {
          position: "top-center"
        })
         localStorage.setItem("signIn",JSON.stringify(inpval));
        navigate('/deshboard')
        dispatch(loginData(inpval))
      }
      else {
        toast.error("Plz Enter A valid Details!", {
          position: "top-center"
        })
      }
    })
  }

  // esy on and off password functionality
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff)

  const handleToglle = () => {
    if (type === 'password') {
      setIcon(eye)
      setType('text')
    } else {
      setIcon(eyeOff)
      setType('password')
    }
  }

  return (
    <div className='container_Wrapper' style={{ backgroundImage: `url(${backgroundImage})` }} >
      <div className='container' style={{ width: '100%' }}>
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
              onChange={(e) => setInpval({ ...inpval, email: e.target.value })}
            />
          </div>
            <label className="form-label">Password</label>
          <div class="input-group mb-3">
          <input type={type}
              className="form-control"
              id="exampleInputPassword1"
              aria-label="Amount (to the nearest dollar)"
              name='password'
              value={inpval.password}
              onChange={(e) => setInpval({ ...inpval, password: e.target.value })}
            />
              <div class="input-group-prepend">
                <span onClick={handleToglle} className="input-group-text"><Icon icon={icon} size={18} /></span>
              </div>
          </div>
          <div id="emailHelp" className="form-text" style={{ color: "#191919" , paddingBottom : "30px" }} >We'll never share your password with anyone else.</div>
          <div className="mb-3 form-check">
            <input required={true} type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className=" loginBtn btn btn-primary" onClick={handleLogin} >Login</button>
          <p className='mt-3'>Don't Have an Account?<span><NavLink to="/register" style={{ color: "darkblue" }} >Register</NavLink></span> </p>
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