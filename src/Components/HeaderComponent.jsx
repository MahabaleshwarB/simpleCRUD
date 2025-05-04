import React from 'react'
import { useNavigate } from "react-router-dom";



const HeaderComponent = () => {
  const navigator = useNavigate();

  function baseNavigate() {
    navigator("/");
  }
  return (
    <div>
        <header>
            <nav className='navbar bg-dark border-bottom border-body' data-bs-theme="dark">
                <a className="navbar-brand p-2" onClick={baseNavigate}>Simple CRUD</a>
                
            </nav>
            
        </header>
    </div>
  )
}

export default HeaderComponent