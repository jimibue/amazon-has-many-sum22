import { useContext, useState } from "react";
import { DataContext } from "../providers/DataProvider";
import BookForm from "./BookForm";

const Book = ({ author_id, id, title, genre }) => {
  const { deleteBook, updateBook } = useContext(DataContext);
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="book btn">
      <p>
        {title}-{genre}{" "}
        <span
          onClick={() => {
            setShowForm(!showForm);
          }}
          className="btn"
        >
          edit
        </span>
        <span
          className="btn"
          onClick={() => {
            deleteBook(author_id, id);
          }}
        >
          x
        </span>
      </p>
      {showForm && (
        <BookForm
          updateBook={updateBook}
          authorId={author_id}
          id={id}
          title={title}
          genre={genre}
        />
      )}
    </div>
  );
};

export default Book;
