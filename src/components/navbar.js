import React, {useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';
import { Store } from '../store';


const NavBar = () => {
    const {state, dispatch} = useContext(Store);


    return (
            <nav className="menu">
                <ul className="menu-ul">
                    <li> <Link to="/"> Home </Link> </li>
                    <li className="cart"> <Link to="/checkout"> CART ({state.cart.length}) </Link> </li>
                </ul>
            </nav>
    )

}

export default NavBar;