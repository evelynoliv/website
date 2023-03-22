import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { gsap } from "gsap";
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import './navbar.css';

const Navbar = () => {

    const [navColor, setNavColor] = useState("#000");
    const [burgerColor, setBurgerColor] = useState("#fff");

    const listenScrollEvent = () => {
        window.scrollY > 10 ? setNavColor("#9f86c0") : setNavColor("#000");

        window.scrollY > 10 ? setBurgerColor("#fff") : setBurgerColor("#fff");
    }

    //scroll listener for navbar color change
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);

    //gsap animation to open/close side menu bar
    const animation = gsap.timeline({ paused: true, reversed: true })
    const line1 = useRef(null);
    const line2 = useRef(null);
    const menuRef = useRef(null);


    useEffect(() => {
        const ctx = gsap.context(() => {
            animation
                .from(menuRef.current, {
                    x: "400%",
                    width: "30%"
                })
                .to(line1.current, {
                    rotationZ: "45deg",
                    duration: .6,
                    backgroundColor: "#222d3e",
                }, "<")
                .to(line2.current, {
                    rotationZ: "-45deg",
                    duration: .6,
                    x: 0,
                    y: "-0.8rem",
                    width: "100%",
                    backgroundColor: "#222d3e",
                }, "<")
        })
        return () => ctx.revert()
    }, [animation]);

    // gsap animation function to open/close menu on click
    const handleMenuClick = () => {
        animation.reversed() ? animation.play() : animation.reverse()
    }

    return (
        <div
            className="navbar"
            style={{
                backgroundColor: navColor,
                transform: "1s"
            }}
        >

            <div className="menu" onClick={handleMenuClick}>
                <div className="line1" ref={line1} style={{ backgroundColor: burgerColor }}></div>
                <div className="line2" ref={line2} style={{ backgroundColor: burgerColor }}></div>
            </div>
            <div className="menu-page" ref={menuRef} onClick={handleMenuClick}>
                <div className="menu-links">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/projects">Projects</Link></li>

                    </ul>
                </div>
                <div className="menu-socials">
                    <a href="http://github.com/evelynoliv"><BsGithub /></a>
                    <a href="http://www.linkedin.com/in/evelynolives"><BsLinkedin /></a>
                    <a href="mailto:evelynolives@gmail.com"><FiMail /></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;