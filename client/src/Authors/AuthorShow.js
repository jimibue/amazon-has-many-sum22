import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { DataContext } from "../providers/DataProvider";

const AuthorsShow = () => {
  const [author, setAuthor] = useState({});
  const [books, setBooks] = useState([]);
  const { id } = useParams();
  // ANOTHER WAY with provider
  const { activeAuthor, getAuthor, getAuthorsBooks, authorsBooks } =
    useContext(DataContext);
  useEffect(() => {
    getAuthorData();
    getAuthorDataFromProvider()
  }, []);

  const getAuthorData = async () => {
    try {
      let authorRes = await axios.get(`/api/authors/${id}`);
      setAuthor(authorRes.data);
      let booksRes = await axios.get(`/api/authors/${id}/books`);
      setBooks(booksRes.data);
    } catch (err) {
      alert("error occured getting Data");
    }
  };

  const getAuthorDataFromProvider = () => {
    //  id is coming from our url
    getAuthor(id)
    getAuthorsBooks(id)
  };
  return (
    <div>
      <h1>AuthorsShow</h1>
      <Link to="/authors">back to authors</Link>
      <p>id: {id}</p>
      <h1>DATA FROM LOCAL STATE IN THIS FILE</h1>
      <p>Author: {JSON.stringify(author)}</p>
      <p>Books: {JSON.stringify(books)}</p>
     <h1>DATA FROM PROVIDER</h1>
      <p>Author: {JSON.stringify(activeAuthor)}</p>
      <p>Books: {JSON.stringify(authorsBooks)}</p>
    </div>
  );
};

export default AuthorsShow;
