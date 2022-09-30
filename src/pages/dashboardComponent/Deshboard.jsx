import React, { useContext, useEffect, useState } from 'react'
import './Dashboard.css'
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { deleteData } from '../../redux-Toolkit/reducer/createSlice';
import { useDispatch, useSelector } from 'react-redux';
import { editData } from '../../redux-Toolkit/reducer/createSlice';
import { useForm } from 'react-hook-form';
import { updateData } from '../../redux-Toolkit/reducer/createSlice';
import { NavLink } from 'react-router-dom';
import NoteContext from '../../Context/NoteContext';
import { eye } from 'react-icons-kit/feather/eye'
import { eyeOff } from 'react-icons-kit/feather/eyeOff'
import { Spinner } from 'react-bootstrap';
import Icon from 'react-icons-kit';

const Deshboard = () => {

  // Data get by Redux-Toolkit and LocalStorage 
  const { register, reset, formState: { errors }, setValue, handleSubmit } = useForm()
  const userData = JSON.parse(localStorage.getItem('register'));
  const id = useSelector(state => state.users.id)
  const dispatch = useDispatch();

  //State
  const [loader, setLoader] = useState(false);
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);

  // Heading Title 
  const title = useContext(NoteContext)
  useEffect(() => {
    title.setTitle("DashBoard...")
  })

  // Delete User!!!
  const handleDelete = (id) => {
    reset();
    dispatch(deleteData((id)))
    alert("Delete User");
  }

  // Edit Functionality
  const handleEdit = (id) => {
    dispatch(editData(id))
  }
  useEffect(() => {
    const data = userData[id]
    if (data) {
      setValue("date", data.date)
      setValue("name", data.name)
      setValue("email", data.email)
      setValue("password", data.password)
      setValue("number", data.number)
      setValue("id", id)
    }
  })

  // Update User!!!
  const handleUpdate = (data) => {
    reset();
    dispatch(updateData(data))
    console.log("update Data", data)
    setLoader(true)
  }

  // Password hide and show!!!!
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
  }, 5000);

  return (
    <div className='deshboard' >
      <div className='header'>
        <h2>Users Details</h2>
      </div>
      <div className='table_body' >
        <table className='table' >
          <thead className='thead' >
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Number</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className='tbody'>
            {
              userData?.map((item, id) => {
                return (
                  <tr key={id} >
                    <td>{id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.number}</td>
                    <td>{item.date}</td>
                    <td onClick={() => handleDelete(id)}  >
                      <DeleteIcon style={{ color: "red", marginLeft: "-28px" }} />
                    </td>
                    <td onClick={() => handleEdit(id)} data-toggle="modal" data-target="#exampleModal">
                      <BorderColorIcon style={{ color: "green", marginLeft: "-60px" }} />
                    </td>
                  </tr>)
              })
            }
          </tbody>
        </table>
        <p className='mt-3'>Don't Have an Account?<span><NavLink to="/register">Register</NavLink></span> </p>
      </div>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title" id="exampleModalLabel" >Update User!!!</h2>
              <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div>
                <form id='form' className='flex flex-col' onSubmit={handleSubmit(handleUpdate)}>
                  <input type="text" {...register("name", { required: true })} placeholder='FullName' />
                  {errors.name?.type === "required" && "Please enter name..."}
                  <input type="email" {...register("email", { required: true, })} placeholder='test@gmail.com' />
                  {errors.email?.type === "required" && "Please enter email..."}
                  <div className='input-field'>
                    <input type={type} {...register("password", { required: true, maxLength: 8 })} placeholder='password' />
                    <span onClick={handleToggle} ><Icon icon={icon} size={18} /></span>
                    {errors.password?.type === "required" && "Please enter password..."}
                    {errors.password?.type === "maxLength" && "Password maxLength is 8 "}
                  </div>
                  <input type="date" {...register("date", { required: true })} />
                  {errors.date?.type === "required" && "Please enter Date..."}
                  <input type="number" {...register("number", { required: true, minLength: 10, maxLength: 10 })} placeholder='mobile number' />
                  {errors.number?.type === "required" && "Mobile Number is required"}
                  {errors.number?.type === "minLength" && "min Length Exceed"}
                  {errors.number?.type === "maxLength" && "Max Length Exceed"}
                  {
                    loader ? <Spinner animation="border" /> : <button className='btn'>Update User</button>
                  }
                  <div className="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Deshboard