import "./App.css";
import AllCRUDPage from "./AllCRUDPage";
import Authors from "./Authors";
import Books from "./Books";
import { Link, Routes, Route, Outlet } from "react-router-dom";
import AuthorsList from "./Authors/AuthorsList";
import AuthorForm from "./Authors/AuthorForm";
import AuthorsShow from "./Authors/AuthorShow";

const MainContanier = () => {
  return (
    <div>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/allCRUDpage">allCRUDpage</Link>
        <Link to="/authors">authors</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

const Home = ()=>{
  return (
    <p>Home</p>
  )
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainContanier />}>
          <Route index element={<Home />} />
          <Route path="/allCRUDpage" element={<AllCRUDPage />} />
          <Route path="/authors" element={<Authors />}>
            <Route index element={<AuthorsList />} />
            <Route path="/authors/new" element={<AuthorForm />} />
            <Route path="/authors/:id/edit" element={<AuthorForm />} />
            <Route path="/authors/:id" element={<AuthorsShow />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
