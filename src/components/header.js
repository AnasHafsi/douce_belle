import React from "react";
import { ReactComponent as Search } from "../assets/search.svg";
import { ReactComponent as Heart } from "../assets/heart.svg";
import { ReactComponent as Cart } from "../assets/cart.svg";
import { ReactComponent as Account } from "../assets/account.svg";
import { ReactComponent as Logo } from "../assets/logo.svg";

function Header() {
    return (
        <div className="header">
            <div className="container">
                <div className="row v-center space-between">
                    <div className="left col">
                        <div className="element btn-row">Home</div>
                        <div className="element btn-row">Shop</div>
                        <div className="element btn-row">About</div>
                        <div className="element btn-row">Contact</div>
                    </div>
                    <div className="logo col">
                        <div className="element">
                            <a href="/">
                                <Logo />
                            </a>
                        </div>
                    </div>
                    <div className="right col">
                        <div className="element btn-row">
                            <Search />
                        </div>
                        <div className="element btn-row">
                            <Heart />
                        </div>
                        <div className="element btn-row">
                            <Cart />
                        </div>
                        <div className="element btn-row">
                            <Account />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
