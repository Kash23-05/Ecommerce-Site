import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = ()=>{
    return(
        <nav style={{ padding: '10px', background: '#fdd0d0ff' }}>
            <Link to="/" style={{ marginRight: '20px',color:'black'}}>Home</Link>
            <Link to="/cart" style = {{color:"black"}}>Cart</Link>
        </nav>
    )
}
export default Navbar;