import { useState } from 'react'
import './App.css'
import ListUsersComponent from './Components/ListUsersComponent'
import HeaderComponent from './Components/HeaderComponent'
import FooterComponent from './Components/FooterComponent'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import AddUserComponent from './Components/AddUserComponent'
import UpdateUserComponent from './Components/UpdateUserComponent'
import DeleteComponent from './Components/DeleteComponent'
import { Link } from 'react-router-dom';



function App() {

  return (
    <>
    <BrowserRouter>
        <HeaderComponent/>
        <Routes>
          <Route path="/" element={<Navigate to="/allusers" />} />
          <Route path="/allusers" element={<ListUsersComponent/>}/>
          <Route path='/createUser' element = {<AddUserComponent/>}></Route>
          <Route path='/deleteUser/{id}' element = {<DeleteComponent/>}></Route>
          <Route path="/updateUser/:id" element = {<UpdateUserComponent/>}></Route>
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
        
        <FooterComponent/>
      </BrowserRouter>
    </>
  )
}

export default App
          
