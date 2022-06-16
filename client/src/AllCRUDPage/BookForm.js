import axios from "axios";
import React, { useContext, useState } from "react";
import { DataContext } from "../providers/DataProvider";

const BookForm = (props) => {
  const [title, setTitle] = useState(props.title || "");
  const [genre, setGenre] = useState(props.genre || "");

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (props.id) {
      // TODO ACTAUL DO STUFF HERE
      props.updateBook(props.authorId, { id: props.id, title, genre });
      console.log("update here:");
    } else {
      // TODO ACTAUL DO STUFF HERE
      props.addBook(props.authorId, { title, genre });
    }
    setTitle("");
    setGenre("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>{props.id ? "Edit" : "New"} Book</h1>
      <p>title</p>
      <input
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <p>genre</p>
      <input
        value={genre}
        onChange={(e) => {
          setGenre(e.target.value);
        }}
      />
      <br />
      <button>{props.id ? "update" : "save"}</button>
    </form>
  );
};

export default BookForm;
