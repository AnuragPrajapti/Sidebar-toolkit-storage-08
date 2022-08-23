import React, { useContext  , useEffect } from 'react'
import { useForm } from 'react-hook-form';
import img from '../Images/img.webp'
import './style.css'
import { useDispatch } from 'react-redux';
import { registerData } from '../redux-Toolkit/reducer/createSlice';
import { NavLink } from 'react-router-dom';
import NoteContext from '../Context/NoteContext';
export default function Form() {
   
   const title = useContext(NoteContext)

   useEffect(() => {
     
    title.setTitle("Register Component...")

}, [])

  const dispatch = useDispatch();

  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const onSubmit = data => {
    reset();
    dispatch(registerData(
      data
    ))
  };

  return (
    <section className='container ' >
      <div className="register">
        <div className="col-1">
          <h2>Register Here!!</h2>
          <hr></hr>
          <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register("name", { required: true  })} placeholder='FullName' />
            {errors.name?.type === "required" && "Please enter name..."}
            <input type="email" {...register("email", { required: true, })} placeholder='test@gmail.com' />
            {errors.email?.type === "required" && "Please enter email..." }
            <input type="password" {...register("password", { required: true, maxLength: 8 })} placeholder='password' />
            {errors.password?.type === "required" && "Please enter password..."}
            {errors.password?.type === "maxLength" && "Password maxLength is 8 "}
            <input type="date" {...register("date", { required: true})} />
            {errors.date?.type === "required" && "Please enter Date..."}
            <input type="number" {...register("number", { required: true , minLength : 10 , maxLength :  10 })} placeholder='mobile number' />
            {errors.number?.type === "required" && "Mobile Number is required"}
            {errors.number?.type === "minLength" && "min Length Exceed"}
            {errors.number?.type === "maxLength" && "Max Length Exceed"}

            <button className='btn'>Register</button>
          <p className='mt-3'>Alredy Have an Accout?<span><NavLink to="/login" >Login</NavLink></span> </p>
          </form>
        </div>
        <div className="col-2">
          <img src={img} alt="" />
        </div>
      </div>
    </section>
  ) 
}                 