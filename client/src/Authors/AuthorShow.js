import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

const AuthorsShow = ()=>{
    const [author, setAuthor] = useState({})
    const [books, setBooks] = useState([])
    const {id} = useParams()
    useEffect(()=>{
        getAuthorData()
    },[])

    const getAuthorData = async()=>{
        try{
          let authorRes = await axios.get(`/api/authors/${id}`)
          setAuthor(authorRes.data)
          let booksRes = await axios.get(`/api/authors/${id}/books`)
          setBooks(booksRes.data)
        }catch(err){
          alert('error occured getting Data')
        }
    }
    return (
        <div>
            <h1>AuthorsShow</h1>
            <Link to='/authors'>back to authors</Link>
            <p>id: {id}</p>
            <p>Author: {JSON.stringify(author)}</p>
            <p>Books: {JSON.stringify(books)}</p>

        </div>
    )
}

export default AuthorsShow