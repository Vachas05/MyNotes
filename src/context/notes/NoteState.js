import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=> {
    const host = "http://localhost:5000"  
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial);

    const getAllNotes = async ()=>{
      //API call
      const response = await fetch(`${host}/api/notes/fetchallnotes`,{
        method : 'GET',
        headers : {
          'Content-Type' : 'application/json',
          'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE3YWFiYTgyNGUzZDRhNDIwYzM5MTViIn0sImlhdCI6MTYzNzM5MjczMiwiZXhwIjoxNjM3Mzk2MzMyfQ.BaE1_DIw27N4OfFkN94SC7MMx-D28ddtDcIHwq9BvY0'
        } 
      });
      
      const json = await response.json();
      console.log(json);

      setNotes(json);
    }

    //Add note
    const addNote = async (title,description,tag)=>{
      //API call
      const response = await fetch(`${host}/api/notes/addnote`,{
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json',
          'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE3YWFiYTgyNGUzZDRhNDIwYzM5MTViIn0sImlhdCI6MTYzNzM5MjczMiwiZXhwIjoxNjM3Mzk2MzMyfQ.BaE1_DIw27N4OfFkN94SC7MMx-D28ddtDcIHwq9BvY0'
        },
        body : JSON.stringify({title,description,tag}) 
      });

      console.log(response.json());

      let note = {
        "_id": "aaa",
        "user": "617aaba824e3d4a420c3915b",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2021-11-14T05:51:15.362Z",
        "__v": 0
      };
      setNotes(notes.concat(note));
    }

    //delete note
    const deleteNote = (id)=>{
      //Api call pending
      console.log("delte note with id");
      const newNotes = notes.filter((note)=>{return note._id !== id});
      setNotes(newNotes);
    }

    //edit note
    const editNote = async (id,title,description,tag) =>{
      //API call
      const response = await fetch(`${host}/api/notes/updatenote/${id}`,{
        method : 'PUT',
        headers : {
          'Content-Type' : 'application/json',
          'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE3YWFiYTgyNGUzZDRhNDIwYzM5MTViIn0sImlhdCI6MTYzNjg3MTgyNSwiZXhwIjoxNjM2ODc1NDI1fQ.B8iJcGVNGZT2L-7_DmLWvrrWB9t2g4djNGC0JYXlQNM'
        },
        body : JSON.stringify({title,description,tag}) 
      });
      
      for (let index = 0; index < notes.length; index++) {
        const element = notes[index];
        if(element._id === id){
          element.title = title;
          element.description = description;
          element.tag = tag;
          break;
        }
      }
    }

    return (
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,getAllNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;