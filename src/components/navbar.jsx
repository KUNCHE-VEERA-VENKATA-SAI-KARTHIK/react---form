import React from 'react'
import logo from '../assets/images/bird-colorful-logo-gradient-vector_343694-1365.avif'
import '../App.css'
import m from '../assets/images/download.jpg'


export default function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <img src= {logo} alt="no emage" className= 'logo'/>   

      <div class="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
        <ul class="navbar-nav">
        
                   
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only"></span></a>
          </li>
          
          <li class="nav-item">
            <a class="nav-link" href="#">Products</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">About</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown08" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
            <div class="dropdown-menu" aria-labelledby="dropdown08">
              <a class="dropdown-item" href="#">contact</a>
              <a class="dropdown-item" href="#">email</a>
              <a class="dropdown-item" href="#">instagram</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <div>
      <i className="bi bi-search fs-3 me -4"></i>
      <i className=""></i>
    </div>

      
    </div>
  )
}
