import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreatArea";
import { useState } from "react";

function App() {
    const [notes, setNotes] = useState([]);
    function addHandel(note){
        setNotes(preNotes => {
            return [...preNotes, note]
        })
    }
    function deleteItems(id){
        setNotes(preNotes => {
            return preNotes.filter((element, index) => {
                return index !== id;
            }) })
    }
  return (
    <div>
      <Header />
      <CreateArea addFunction={addHandel}/>
      {notes.map((items, index) => {
        return (<Note key={index} id={index} title={items.title} content={items.content} onDelete={deleteItems}/>);
      })}
      
      <Footer />
    </div>
  );
}

export default App;
