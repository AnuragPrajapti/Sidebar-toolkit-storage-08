import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import img from '../../Images/img.webp'
import './Register.css'
import { useDispatch } from 'react-redux';
import { registerData } from '../../redux-Toolkit/reducer/createSlice';
import { NavLink } from 'react-router-dom';
import NoteContext from '../../Context/NoteContext';
import Icon from 'react-icons-kit';
import { eye } from  'react-icons-kit/feather/eye'
import { eyeOff } from 'react-icons-kit/feather/eyeOff'
import LinkedinContainer from '../linkedin/LinkedinContainer';
import { Spinner } from 'react-bootstrap';

export default function Form() {

  const title = useContext(NoteContext)

  useEffect(() => {

    title.setTitle("Register Component...")

  }, [])

  //dispatch data from redux 
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const onSubmit = data => {
    reset();
    dispatch(registerData(
      data
    ))
    setLoader(true);
  };

  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);

  const handleToggle = (e) => {
    if (type === 'password') {
      setIcon(eye);
      setType('text');
    }
    else {
      setIcon(eyeOff);
      setType('password');
    }
  }
  //Spinner Functionality   
  setTimeout(() => {
    setLoader(false);
  }, 3000);

  return (
    <section className='container' >
      <div className="register">
        <div className="registerForm">
          <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
            <h2>Register Here!!</h2>
            <hr></hr>
            <LinkedinContainer />
            <input type="text" {...register("name", { required: true })} placeholder='FullName' />
            {errors.name?.type === "required" && <p style={{color : "red"}}>"Please enter name..."</p> }
            <input type="email" {...register("email", { required: true, })} placeholder='test@gmail.com' />
            {errors.email?.type === "required" && <p style={{color : "red"}}>Please enter email...</p>}
            <div className='input-field'>
              <input type={type} {...register("password", { required: true, maxLength: 8 })} placeholder='password' />
              <span onClick={handleToggle} ><Icon icon={icon} size={18} /></span>
              {errors.password?.type === "required" && <p style={{color : "red"}}>Please enter password...</p>}
              {errors.password?.type === "maxLength" &&  <p style={{color : "red"}}>Password maxLength is 8</p> }
            </div>
            <input type="date" {...register("date", { required: true })} />
            {errors.date?.type === "required" && <p style={{color : "red"}}>Please enter Date...</p>}
            <input type="number" {...register("number", { required: true, minLength: 10, maxLength: 10 })} placeholder='mobile number' />
            {errors.number?.type === "required" && <p style={{color : "red"}}>Mobile Number is required</p>}
            {errors.number?.type === "minLength" && <p style={{color : "red"}}>min Length Exceed</p>}
            {errors.number?.type === "maxLength" && <p style={{color : "red"}}>Max Length Exceed </p>}
            {
              loader ? <Spinner animation="border" /> : <button className='btn'>Register</button>
            }
            <p className='mt-3'>Alredy Have an Accout?<span><NavLink to="/login" >Login</NavLink></span> </p>
            <p>&copy; All Right Reserved....</p>
          </form>
        </div>
        <div className="registerImage">
          <img src={img} alt="img" />
        </div>
      </div>
    </section>
  )
}                 