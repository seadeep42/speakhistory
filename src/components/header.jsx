import React, { useState, useEffect } from "react";
import classNames from "classnames";

import Logo from "../assets/logo_speakhistory.svg";
import { ROUTES } from "../utils";

const SCROLL_THRESHOLD = 40;

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    const onScroll = () => {
        if(window.scrollY > SCROLL_THRESHOLD && !scrolled){
            setScrolled(true);
        } else if(window.scrollY < SCROLL_THRESHOLD && !!scrolled) {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    });
    return (
        <div
            id="header"
            className={
                classNames({
                    scrolled,
                })
            }    
        >
            <a href={ROUTES.HOMEPAGE}>
                <img src={Logo} id="header-logo" />
            </a>
            <nav id="header-nav">
                <a href={ROUTES.SESSIONS}>Sessions</a>
                <a href={ROUTES.SPEAKERS}>Speakers</a>
                <a href={ROUTES.GALLERY}>Gallery</a>
                <a href={ROUTES.MEMBERSHIP}>Membership</a>
            </nav>
        </div>
    )
};

export default Header;
