import { Route, Routes } from "react-router-dom";

import USERS from "./pages/users";
import TODOS from "./pages/todos";
import POSTS from "./pages/posts";
import HOME from "./pages/HomePage";

function App() {
    return (
      <>

     <Routes>
        <Route path="/" element={<HOME/>}>

             <Route  path="/users"    element={ <USERS />}/> 
           <Route  path="/todos"    element={ <TODOS />}/> 
           <Route  path="/posts"    element={ <POSTS />}/> 
        </Route>
          

        </Routes>
     
         </>
  );
}

export default App;
