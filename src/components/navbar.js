import React, {useEffect} from 'react';

const NavBar = () => {

    return (
        <nav className="menu">
            <ul className="menu-ul">
                <li> Home </li>

                <li className="cart"> CART (0)</li>
            </ul>
        </nav>
    )

}

export default NavBar;