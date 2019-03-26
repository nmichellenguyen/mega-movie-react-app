import React, { Component } from 'react'
import './index.css';

const Nav = () => {
    return (
    <div>
        <h1> Mega Movie List</h1>
        <p>Welcome!</p>
    
        <img src='https://images.unsplash.com/photo-1500723740448-f5c8938c7483?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80'
      alt='frontpage-img'/>
    
    </div>
    )
  }
  class Navbar extends Component {
    render() {
      return (
        <Nav/>
      )
    }
  }

  export default Navbar