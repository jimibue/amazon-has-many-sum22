import { useContext } from "react";
import AuthorForm from "../Authors/AuthorForm";
import { BonusContext } from "../providers/BonusProvider";
import { DataContext } from "../providers/DataProvider";
import Author from "./Author";

const dummyAuthors = [
  {
    id: 1,
    name: "Steven King!",
    age: 21,
    books: [
      { id: 1, title: "it", genre: "horror" },
      { id: 2, title: "cemetary", genre: "horror" },
      { id: 4, title: "cemetary", genre: "horror" },
      { id: 5, title: "cemetary", genre: "horror" }
    ]
  },

  {
    id: 2,
    name: "Neil Tyson",
    age: 31,
    books: [{ id: 3, title: "book3", genre: "yo" }]
  }
];

const AllCRUDPage = () => {
  const {authorsWithBooks, addBook} = useContext(BonusContext)
  
  const {
    authors,
    books,
    addAuthor,
    updateAuthor,
    deleteAuthor,
    getAuthorsBooks,
    authorsBooks,
    addAuthorsBook,
    updateAuthorsBook,
    deleteAuthorsBook
  } = useContext(DataContext);

  const normalizeAuthorsAndRender = ()=>{
    
    // authors state from provider
    const normalizedAuthors = authors.map(a=>{
      return {
        id:a.id,
        name: a.name,
        age: a.age,
        books: books.filter(b=> b.author_id === a.id)
      }
    })

    return normalizedAuthors.map(na=> <Author {...na}/>)
  }

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
      <h1>Amazon app</h1>
      <h3>Authors</h3>
      
      <AuthorForm addAuthor={addAuthor} />
      <div className="authors component">
        {normalizeAuthorsAndRender()}
      </div>
    </div>
  );
};

export default AllCRUDPage;
