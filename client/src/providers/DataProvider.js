// author => {id:PK, name: string: age: number}
// get '/api/authors' => 'all authors'
// post '/api/authors'  => 'create author'
// {id:PK, (reqiured)name: string,  age: number}
// get '/api/authors/:id' =>'one author'
// put '/api/authors/:id'  => updates author
// delete '/api/authors/:id', => 'delets an author'

// {id:PK, name: string, genre: string, author_id:FK(required)}
// get '/api/books/' => all books
// get '/api/authors/:author_id/books' => all book from a given author
// post '/api/authors/:author_id/books' => create a book
// get '/api/authors/:author_id/books/:id' => gets a specific book
// put '/api/authors/:author_id/books/:id' => updates a book
// delete '/api/authors/:author_id/books/:id', => deletes a book

// React.createContext API
import axios from "axios";
import React, { useEffect, useState } from "react";

// 1. a way to consume data (useContext hook)
// we export the context and give that to the useContext hook
// in another component
// let x = useContext(DataContext)
export const DataContext = React.createContext();

//2.  a way to provide data with the value props
const DataProvider = (props) => {
  const [authors, setAuthors] = useState([]);
  const [activeAuthor, setActiveAuthor] = useState(null);
  const [authorsBooks, setAuthorsBooks] = useState(null);

  // MIGHT REMOVE THIS BUT FOR NOW GET AUTHORS
  // WHEN THE APP MOUNTS
  useEffect(() => {
    getAuthors();
  }, []);

  // CRUD ACTIONS ON AUTHOR
  // WITH CRUD ACTION IN REALTION TO STATE(DATA)
  // 1.  axios call (get data from server)
  // 2.  set state
  // 3. ERROR HANDLING
  const getAuthors = async () => {
    try {
      let res = await axios.get("/api/authors");
      setAuthors(res.data);
    } catch (err) {
      alert("err occured getAuthors");
    }
  };

  const getAuthor = async (authorId) => {
    try {
      let res = await axios.get(`/api/authors/${authorId}`);
      setActiveAuthor(res.data);
    } catch (err) {
      alert("err occured getAuthor");
    }
  };

  // {(reqiured)name: string,  age: number}
  const addAuthor = async (author) => {
    if (!author.name || author.name === "") {
      alert("bad author data");
      return;
    }
    try {
      let res = await axios.post("/api/authors", author);
      setAuthors([res.data, ...authors]);
    } catch (err) {
      alert("err occured addAuthor");
    }
  };

  // {id, (reqiured)name: string,  age: number}
  const updateAuthor = async (author) => {
    if (author.name === "" || !author.id) {
      alert("bad author data");
      return;
    }
    try {
      let res = await axios.put(`/api/authors/${author.id}`, author);
      let updateAuthors = authors.map(a=> a.id === res.data.id ? res.data : a) 
      setAuthors(updateAuthors);
    } catch (err) {
      alert("err occured addAuthor");
    }
  };

  const deleteAuthor = async (id) => {
    try {
      await axios.delete(`/api/authors/${id}`);
      setAuthors(authors.filter((a) => a.id !== id));
    } catch (err) {
      alert("err occured addAuthor");
    }
  };

  const getAuthorsBooks = async (authorId) => {
    if (!authorId) {
      alert("yo need an id");
      return;
    }
    try {
      let res = await axios.get(`/api/authors/${authorId}/books`);
      setAuthorsBooks(res.data);
    } catch (err) {
      alert("err occured getAuthorsBooks");
    }
  };
  const addAuthorsBook = async (authorId, book) => {
    try {
      let res = await axios.post(`/api/authors/${authorId}/books`, book);
      setAuthorsBooks([res.data, ...authorsBooks]);
    } catch (err) {
      alert("err occured getAuthorsBooks");
    }
  };

  const updateAuthorsBook = async (authorId, book) => {
    try {
      let res = await axios.put(`/api/authors/${authorId}/books/${book.id}`, book);
      let updateAuthorsBooks =  authorsBooks.map((b) => (b.id === res.data.id ? res.data : b))
      setAuthorsBooks(updateAuthorsBooks);
    } catch (err) {
      alert("err occured getAuthorsBooks");
    }
  };

  const deleteAuthorsBook = async (authorId, bookId) => {
    try {
      let res = await axios.delete(`/api/authors/${authorId}/books/${bookId}`);
      let updateAuthorsBooks =  authorsBooks.filter((b) => (b.id !== res.data.id))
      setAuthorsBooks(updateAuthorsBooks);
    } catch (err) {
      alert("err occured getAuthorsBooks");
    }
  };

  return (
    <DataContext.Provider
      value={{
        deleteAuthor,
        updateAuthor,
        authors,
        getAuthors,
        addAuthor,
        authorsBooks,
        getAuthorsBooks,
        updateAuthorsBook,
        addAuthorsBook,
        deleteAuthorsBook,
        activeAuthor,
        getAuthor
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;

// in another component
// let x = useContext(DataContext)
// x is going to be the value of the value prop
