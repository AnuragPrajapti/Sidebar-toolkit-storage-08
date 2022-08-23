import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props)=>{
   const [title , setTitle] = useState('');
 
   const data = {
    title , setTitle
   }

   return(
        <NoteContext.Provider value={data}>
            {props.children}
        </NoteContext.Provider>
   )

}

export default NoteState;


