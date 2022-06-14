import { Link,Outlet } from "react-router-dom"

const Authors = ()=>{
    return (
        <div>
            <div className='navbar'>
              <Link to='/authors'>Authors</Link>
              <Link to='/authors/new'>New Author</Link>
            </div>
            <div>
               <Outlet />
            </div>
           
        </div>
    )
}

export default Authors