import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=> {
    const notesInitial = [
        {
          "_id": "6190a370508ee55541919a7a1",
          "user": "617aaba824e3d4a420c3915b",
          "title": "My Title",
          "description": "Please wake up eearly",
          "tag": "sleep",
          "date": "2021-11-14T05:49:36.899Z",
          "__v": 0
        },
        {
          "_id": "6190a3d23eed715919c1827e2",
          "user": "617aaba824e3d4a420c3915b",
          "title": "My Title",
          "description": "Please wake up eearly",
          "tag": "sleep",
          "date": "2021-11-14T05:51:14.860Z",
          "__v": 0
        },
        {
          "_id": "6190a3d33eed715919c182803",
          "user": "617aaba824e3d4a420c3915b",
          "title": "My Title",
          "description": "Please wake up eearly",
          "tag": "sleep",
          "date": "2021-11-14T05:51:15.362Z",
          "__v": 0
        },
        {
            "_id": "6190a370508ee55541919a7a4",
            "user": "617aaba824e3d4a420c3915b",
            "title": "My Title",
            "description": "Please wake up eearly",
            "tag": "sleep",
            "date": "2021-11-14T05:49:36.899Z",
            "__v": 0
          },
          {
            "_id": "6190a3d23eed715919c1827e5",
            "user": "617aaba824e3d4a420c3915b",
            "title": "My Title",
            "description": "Please wake up eearly",
            "tag": "sleep",
            "date": "2021-11-14T05:51:14.860Z",
            "__v": 0
          },
          {
            "_id": "6190a3d33eed715919c182806",
            "user": "617aaba824e3d4a420c3915b",
            "title": "My Title",
            "description": "Please wake up eearly",
            "tag": "sleep",
            "date": "2021-11-14T05:51:15.362Z",
            "__v": 0
          }
    ]

    const [notes, setNotes] = useState(notesInitial);

    //Add note
    const addNote = (title,description,tag)=>{
      //API call
      let note = {
        "_id": "aaa",
        "user": "617aaba824e3d4a420c3915b",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2021-11-14T05:51:15.362Z",
        "__v": 0
      };
      console.log(note);
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
    const editNote = (id,title,description,tag) =>{

    }

    return (
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;