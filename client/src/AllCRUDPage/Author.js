import { useContext, useState } from "react";
import { DataContext } from "../providers/DataProvider";
import AuthorForm from "./AuthorForm";
import Book from "./Book";
import BookForm from "./BookForm";

const Author = ({ id, name, books, age }) => {
  const [showForm, setShowForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const { deleteAuthor, addBook, updateAuthor } = useContext(DataContext);
  return (
    <div className="author component">
      <h5>
        {name}{" "}is {age} years old
        <span
          onClick={() => {
            setShowEditForm(!showEditForm);
          }}
          className="btn"
        >
          edit
        </span>
        <span className="btn" onClick={() => deleteAuthor(id)}>
          x
        </span>
      </h5>
      {showEditForm && <AuthorForm id={id} name={name} age={age} updateAuthor={updateAuthor} setShowEditForm={setShowEditForm}/>}

      <div className="books component">
        <button onClick={() => setShowForm(!showForm)}>
          {showForm ? "hide" : "show"} form
        </button>
        {showForm && <BookForm addBook={addBook} authorId={id} />}
        {books.map((b) => (
          <Book {...b} />
        ))}
      </div>
    </div>
  );
};

export default Author;
