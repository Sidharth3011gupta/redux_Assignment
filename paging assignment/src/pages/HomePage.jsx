import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const HOME = () => {

  return (
    <div > 
        
         
         <div  className='  flex items-center  ml-48 gap-3  mt-4 p-3  border-b-2 border-b-slate-900'>

            <Link  to="/">HOME
            </Link>
            
              <Link to="/users">
                  USERS
              </Link>
              <Link  to="/todos">
                  TODOS
              </Link>
              <Link to="/posts">
                  POSTS
              </Link>
              <Outlet></Outlet>
              
         </div>
         <h1 className=" text-9xl">THIS IS MY HOME PAGE</h1>
    </div>
  )
}

export default HOME
