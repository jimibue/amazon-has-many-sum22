import axios from "axios";
import React, { useContext, useState } from "react";
import { DataContext } from "../providers/DataProvider";

const AuthorForm = (props) => {
  const [name, setName] = useState(props.name ? props.name : "");
  const [age, setAge] = useState(props.age || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, age });
    if (props.id) {
      // TODO ACTAUL DO STUFF HERE
      props.updateAuthor({ id: props.id, name, age });
      console.log("update here:");
      if(props.setShowEditForm){
        props.setShowEditForm(false)
      }
    } else {
      // TODO ACTAUL DO STUFF HERE
      props.addAuthor({ name, age });
      console.log("create here:", { name, age });
    }
    setAge("");
    setName("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>{props.id ? "Edit" : "New"} Form</h1>
      <p>name</p>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <p>age</p>
      <input
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
      <br />
      <button>{props.id ? "update" : "save"}</button>
    </form>
  );
};

export default AuthorForm;
