import { Link } from "react-router-dom"
import {ShoppingCart} from 'phosphor-react'
export const Navbar = () => {
  return (
    <div className="navbar">
        <div className="links">
<Link className="shop" to="/">Shop</Link>
<Link className="cart" to="/cart"> <ShoppingCart size={32}/></Link>
        </div>
    </div>
  )
}
