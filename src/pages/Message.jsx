import React, { useContext, useEffect, useState } from 'react'
import NoteContext from '../Context/NoteContext'
import { Button, Modal, Dropdown, Menu, message, Space, MenuProps } from 'antd';
import './Message.css'
import 'antd/dist/antd.css';
import { DownOutlined } from '@ant-design/icons';
import ChatBody from '../components/chetBox/chatBody/ChatBody';



const Messages = () => {
  const [ changeValue , setChangeValue ] = useState();
  const handleChange = (e) =>{
         console.log("object",e.target.value);
         setChangeValue(e);
  }


  useEffect(() => {
 
  }, [])
  

  return (
    <>
      <div className="container">
          <ChatBody />
      </div>
    </>
  )
}

export default Messages
