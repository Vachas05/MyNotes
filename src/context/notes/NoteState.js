import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=> {
    const notesInitial = [
        {
          "_id": "6190a370508ee55541919a7a",
          "user": "617aaba824e3d4a420c3915b",
          "title": "My Title",
          "description": "Please wake up eearly",
          "tag": "sleep",
          "date": "2021-11-14T05:49:36.899Z",
          "__v": 0
        },
        {
          "_id": "6190a3d23eed715919c1827e",
          "user": "617aaba824e3d4a420c3915b",
          "title": "My Title",
          "description": "Please wake up eearly",
          "tag": "sleep",
          "date": "2021-11-14T05:51:14.860Z",
          "__v": 0
        },
        {
          "_id": "6190a3d33eed715919c18280",
          "user": "617aaba824e3d4a420c3915b",
          "title": "My Title",
          "description": "Please wake up eearly",
          "tag": "sleep",
          "date": "2021-11-14T05:51:15.362Z",
          "__v": 0
        },
        {
            "_id": "6190a370508ee55541919a7a",
            "user": "617aaba824e3d4a420c3915b",
            "title": "My Title",
            "description": "Please wake up eearly",
            "tag": "sleep",
            "date": "2021-11-14T05:49:36.899Z",
            "__v": 0
          },
          {
            "_id": "6190a3d23eed715919c1827e",
            "user": "617aaba824e3d4a420c3915b",
            "title": "My Title",
            "description": "Please wake up eearly",
            "tag": "sleep",
            "date": "2021-11-14T05:51:14.860Z",
            "__v": 0
          },
          {
            "_id": "6190a3d33eed715919c18280",
            "user": "617aaba824e3d4a420c3915b",
            "title": "My Title",
            "description": "Please wake up eearly",
            "tag": "sleep",
            "date": "2021-11-14T05:51:15.362Z",
            "__v": 0
          }
    ]

    const [notes, setNotes] = useState(notesInitial);

    return (
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;