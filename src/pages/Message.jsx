import React, { useContext, useEffect, useState } from 'react'
import NoteContext from '../Context/NoteContext'
import './Message.css'
import ChatBody from '../components/chetBox/chatBody/ChatBody';

const Messages = () => {

  const [title, setTitle] = useState();
  const subject = useContext(NoteContext);

  useEffect(() => {
    subject.setTitle("Message Component...")
  }, [])

  return (
    <>
      <div className="container containerWrapperMessage">
          <ChatBody />
      </div>
    </>
  )
}

export default Messages
