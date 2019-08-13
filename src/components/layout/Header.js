import React from 'react';
import { Link } from 'react-router-dom'
import Search from '../../components/Search'


function Header({ search }) {

  return (
    <React.Fragment>
      <header style={headerStyle}>
        <h1>TodoList</h1>
        <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
          <Link to='/' style={linkStyle}>Home</Link> | <Link to='/about' style={linkStyle}>About</Link>
        </div>
        <Search search={search} />
      </header>
    </React.Fragment>
  )
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
}

export default Header