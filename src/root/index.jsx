import React from "react";
import { BrowserRouter, Navigate, Route, Routes, } from "react-router-dom";
import { navbar } from "../utils/navbar";
import Navbar from "../components/navbar"

const Root = () => {
   return (
      <div>
         <BrowserRouter>
            <Routes>
               {/* <Route path='/home' element={<h1>Home</h1>} /> */}

               {/* <Route path='/properties' element={<h1>Properties</h1>} /> */}
               <Route element={ <Navbar/> } >
                  {
                     navbar.map(({ path, element, title, id }) => {
                        return (<Route key={id} path={path} element={element} />)
                     })
                     }
               </Route>
               <Route path='*' element={<h1>404 not Found</h1>} />
               <Route path='/' element={<Navigate to={'/home'}/>} />
            </Routes>
         </BrowserRouter>
      </div>
   )
}

export default Root