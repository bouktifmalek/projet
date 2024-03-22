import React from 'react'
import { Link } from 'react-router-dom';
function Navbar() {
  return (
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="#">bootcomp</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link  class="nav-link active" aria-current="page" to="Home">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="Login">Login</Link>
        </li>
        <li class="nav-item">
  <Link class="nav-link" to="registre">Signup</Link>
</li>
 
 <li class="nav-item">
  <Link class="nav-link" to="AddEvent">AddEvent</Link>
</li>
 
 <li class="nav-item">
  <Link class="nav-link" to="Event">Event</Link>
</li>
 
 <li class="nav-item">
  <Link class="nav-link" to="User">User</Link>
</li>
 
 
         
         
         
         
         
         
         
         



     
      </ul>



     
    </div>
  </div>
</nav>
  );
}

export default Navbar
