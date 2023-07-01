import React, { useState, useEffect, MouseEvent, MouseEventHandler } from "react";
import "./Header.styles.scss";
import { gsap } from "gsap";

import Button from "../Button/Button.component";

import BurgerIcon from "../../assets/icons/BurgerIcon/BurgerIcon.icon";
import ButtonArrow from "../../assets/icons/ButtonArrow/ButtonArrow.icon";

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 479 && windowWidth >= 479) {
                setIsOpen(false);
                gsap.to(".header__menu", {
                    x: "100%",
                    duration: 0,
                });
            }

            setWindowWidth(window.innerWidth);

            if (window.innerWidth >= 479) {
                gsap.to(".header__menu", {
                    x: "0%",
                    duration: 0,
                });
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [windowWidth]);

    const handleMenuClick = (event: MouseEvent<HTMLDivElement>) => {
        if (window.innerWidth < 479) {
            setIsOpen(!isOpen);
            if (!isOpen) {
                gsap.to(".header__menu", {
                    x: "0%",
                    duration: 0.6,
                });
            } else {
                gsap.to(".header__menu", {
                    x: "100%",
                    duration: 0.6,
                });
            }
        }
    };

    const handleLinkClick: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement> = (event) => {
        if (window.innerWidth < 479 && isOpen) {
            setIsOpen(false);
            gsap.to(".header__menu", {
                x: "100%",
                duration: 0.6,
            });
        }
    };

    return (
        <div className={`header ${isOpen ? "open" : ""}`}>
            <div className="header__wrapper">
                <a href="/" className="header__logo-link">
                    <img
                        src="https://uploads-ssl.webflow.com/648eea9edc2a09b6357beaee/648f13996b4fde43a574e849_logo.svg"
                        loading="lazy"
                        alt=""
                        className="header__logo-icon"
                    />
                </a>
                <div className="header__menu">
                    <div className="header__navigation">
                        <Button text="Case studies" model={"text"} onClick={handleLinkClick} />
                        <Button text="Pricing" model={"text"} onClick={handleLinkClick} />
                        <Button text="Contact" model={"text"} onClick={handleLinkClick} />
                    </div>

                    <Button text="Log in" model="text" onClick={handleLinkClick} icon={<ButtonArrow />} />
                </div>
                <div className="burger" onClick={handleMenuClick}>
                    <div className="text--burger">Menu</div>
                    <BurgerIcon />
                </div>
            </div>
        </div>
    );
};

export default Header;
