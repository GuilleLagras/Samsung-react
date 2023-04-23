import React from "react";
import CartWidget from '../CartWidet';

export const NavBar = () => {
        return (
                <div className="container">
                    <nav className="nav">
                        <div className="nav_brand">
                            <a className="nav_link" href="">Tienda Samsung</a>
                        </div>
                        <ul className="nav_list">
                            <li><a className="nav_link" href=""></a>Modelos</li>
                            <li><a className="nav_link" href=""></a>Contacto</li>
                            <li>
                                <a className="nav_link" href="">
                                    <CartWidget/>
                                </a>
                                </li>
                        </ul>
                    </nav>
                </div>
            );
        }
        export default NavBar;
