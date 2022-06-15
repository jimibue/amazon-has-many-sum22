import { useContext } from "react";
import { BonusContext } from "../providers/BonusProvider";
import { DataContext } from "../providers/DataProvider";

const AllCRUDPage = () => {
  const {authorsWithBooks, addBook} = useContext(BonusContext)
  
  const {
    authors,
    addAuthor,
    updateAuthor,
    deleteAuthor,
    getAuthorsBooks,
    authorsBooks,
    addAuthorsBook,
    updateAuthorsBook,
    deleteAuthorsBook
  } = useContext(DataContext);

  const renderBonus = ()=>{
    return authorsWithBooks.map(ab=>{
        return (
            <div>
                <p>{ab.name}</p>
                <p>books:</p>
                {ab.books.map(b=>{
                    return(
                        <div>
                            <p>{b.title}</p>
                        </div>
                    )
                })}
            </div>
        )
    })
  }
  return (
    <div>
      <h1>AllCRUDPage Here</h1>
      <p> Do all crud here</p>
      <p>Authors :{JSON.stringify(authors)}</p>
      <p>Author first books :{JSON.stringify(authorsBooks)}</p>

      <h1>TEST SECTION Authors Books DELETE WHEN DONE OR DOING UI</h1>
      <button
        onClick={() => {
          getAuthorsBooks(authors[0].id);
        }}
      >
        get books
      </button>
      <button
        onClick={() => {
            addAuthorsBook(authors[0].id, {
            title: "test book",
            genre: "test genre",
          });
        }}
      >
        {" "}
        add book
      </button>

      <button
        onClick={() => {
            updateAuthorsBook(authors[0].id, {
            id: 1,
            title: "UPDATED book",
            genre: "UPATED genre",
          });
        }}
      >
        {" "}
        update book
      </button>

      <button
        onClick={() => {
            deleteAuthorsBook(1,1);
        }}
      >
       
        delete book
      </button>


      <h1>TEST SECTION AUthors DELETE WHEN DONE OR DOING UI</h1>
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

      <button onClick={() => deleteAuthor(authors[0].id)}>delete Author</button>

      <h1>BONUS SECTION</h1>
      <div>{renderBonus()}</div>
      <button onClick={()=>addBook(1, {title:'yo', genre:'yoyo'})}>add book</button>
    </div>
  );
};

export default AllCRUDPage;
