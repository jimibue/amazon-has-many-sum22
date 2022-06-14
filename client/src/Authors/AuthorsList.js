import { useEffect, useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router";

const AuthorsList = () => {
  const [authors, setAuthors] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    getAuthors();
  }, []);

  const renderAuthors = () => {
    return authors.map((a) => {
      return (
        <div className="component">
          <p>{a.name}</p>
          <button onClick={()=> navigate(`/authors/${a.id}`)}>show</button>
        </div>
      );
    });
  };

  const getAuthors = async () => {
    try {
      let res = await axios.get("/api/authors");
      setAuthors(res.data);
    } catch (err) {
      alert("err getAuthors occured");
    }
  };
  return (
    <div>
      <h1>AuthorsList</h1>
      {renderAuthors()}
    </div>
  );
};

export default AuthorsList;
