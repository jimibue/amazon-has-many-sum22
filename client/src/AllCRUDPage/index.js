import { useContext } from "react";
import { DataContext } from "../providers/DataProvider";

const AllCRUDPage = () => {
  const { authors, addAuthor, updateAuthor,deleteAuthor } = useContext(DataContext);
  return (
    <div>
      <h1>AllCRUDPage Here</h1>
      <p> Do all crud here</p>
      <p>{JSON.stringify(authors)}</p>

      <h1>TEST SECTION DELETE WHEN DONE OR DOING UI</h1>
      <button onClick={() => addAuthor({ name: "test1", age: 23 })}>
        add Author
      </button>

      <button
        onClick={() =>
          updateAuthor({ id: authors[0].id, name: "asdf", age: 100 })
        }
      >
        update Author
      </button>

      <button
        onClick={() =>
          deleteAuthor(authors[0].id)
        }
      >
        delete Author
      </button>
    </div>
  );
};

export default AllCRUDPage;
