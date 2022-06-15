import axios from "axios";
import React, { useEffect, useState } from "react";

export const BonusContext = React.createContext();

const BonusProvider = (props) => {
  const [authorsWithBooks, setAuthorsWithBooks] = useState([]);
 
  useEffect(() => {
    getAllData();
  }, []); 

  const addBook = async(authorId, book) => {
      // axios call
      let res = await axios.post(`/api/authors/${authorId}/books`, book)
      // res.data
      // update your state
      let newAuthorsWithBooks = authorsWithBooks.map(ab=>{
          if(ab.authorId !== authorId){
              return ab
          }
          // need to add book to ab.books
          return {...ab, books: [res.data, ...ab.books]}
      })
      setAuthorsWithBooks(newAuthorsWithBooks)
  }

  const normalizeData = (authors, books) => {
    let normalizeData = authors.map((a) => {
      // get all book that belong to the current author we are looping over
      let authorsBooks = books.filter((b) => b.author_id === a.id);
      return {
        authorId: a.id,
        name: a.name,
        age: a.age,
        books: authorsBooks,
      };
    });
    console.log("normalizeData:", normalizeData);
    setAuthorsWithBooks(normalizeData);
  };


  const getAllData = async () => {
    let authorsRes = await axios.get("/api/authors");
    let booksRes = await axios.get("/api/books");
    let authors = authorsRes.data;
    let books = booksRes.data;
    normalizeData(authors, books);
  };
  return (
    <BonusContext.Provider value={{ authorsWithBooks, addBook }}>
      {props.children}
    </BonusContext.Provider>
  );
};

export default BonusProvider;
