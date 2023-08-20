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
                        <Button text="FAQ" model={"text"} link="/faa" onClick={handleLinkClick} />
                        <Button text="Contact" model={"text"} link="/contact-us" onClick={handleLinkClick} />
                    </div>

                    <a href="https://discord.com/">
                        <svg className="icon" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Discord" clipPath="url(#clip0_1653_4595)">
                                <path
                                    id="Shape"
                                    d="M14.4236 3.51094C13.4038 3.04302 12.3102 2.69828 11.1668 2.50083C11.146 2.49702 11.1252 2.50654 11.1145 2.52559C10.9738 2.77573 10.8181 3.10206 10.709 3.35856C9.47918 3.17445 8.25569 3.17445 7.05112 3.35856C6.942 3.09636 6.78056 2.77573 6.63929 2.52559C6.62856 2.50718 6.60776 2.49765 6.58694 2.50083C5.44418 2.69765 4.35061 3.04239 3.3302 3.51094C3.32136 3.51475 3.31379 3.52111 3.30877 3.52935C1.2345 6.62826 0.666273 9.651 0.945026 12.6363C0.946288 12.6509 0.954486 12.6648 0.965838 12.6737C2.33438 13.6787 3.66004 14.2889 4.96109 14.6933C4.98191 14.6997 5.00398 14.692 5.01723 14.6749C5.32499 14.2546 5.59933 13.8115 5.83456 13.3454C5.84844 13.3181 5.83519 13.2857 5.80682 13.275C5.37166 13.1099 4.95731 12.9086 4.55873 12.6801C4.5272 12.6617 4.52468 12.6166 4.55368 12.595C4.63755 12.5321 4.72145 12.4667 4.80154 12.4007C4.81603 12.3886 4.83622 12.3861 4.85326 12.3937C7.47176 13.5892 10.3066 13.5892 12.8942 12.3937C12.9112 12.3855 12.9314 12.388 12.9466 12.4001C13.0267 12.4661 13.1105 12.5321 13.1951 12.595C13.2241 12.6166 13.2222 12.6617 13.1906 12.6801C12.7921 12.9131 12.3777 13.1099 11.9419 13.2743C11.9135 13.2851 11.9009 13.3181 11.9148 13.3454C12.1551 13.8108 12.4294 14.254 12.7315 14.6743C12.7441 14.692 12.7668 14.6997 12.7876 14.6933C14.095 14.2889 15.4207 13.6787 16.7892 12.6737C16.8012 12.6648 16.8088 12.6515 16.81 12.6369C17.1436 9.1856 16.2512 6.18765 14.4444 3.52998C14.44 3.52111 14.4324 3.51475 14.4236 3.51094ZM6.22559 10.8185C5.43724 10.8185 4.78766 10.0948 4.78766 9.20593C4.78766 8.31707 5.42464 7.59331 6.22559 7.59331C7.03282 7.59331 7.67611 8.32343 7.66349 9.20593C7.66349 10.0948 7.02651 10.8185 6.22559 10.8185ZM11.5421 10.8185C10.7537 10.8185 10.1042 10.0948 10.1042 9.20593C10.1042 8.31707 10.7411 7.59331 11.5421 7.59331C12.3493 7.59331 12.9926 8.32343 12.98 9.20593C12.98 10.0948 12.3493 10.8185 11.5421 10.8185Z"
                                    fill="white"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_1653_4595">
                                    <rect width="16" height="16" fill="white" transform="translate(0.878906 0.5)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>

                    <Button text="Go to app" color="smoke" onClick={handleLinkClick} icon={<ButtonArrow />} isIconBig={true} />
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
