import React, { FC } from "react";
import "./BurgerIcon.styles.scss";

interface BurgerIconProps {
    color?: string;
}

const BurgerIcon: FC<BurgerIconProps> = ({ color = "inherit" }) => (
    <svg viewBox="0 0 16 17" fill="none" className="burger-icon" xmlns="http://www.w3.org/2000/svg" style={{ color }}>
        <path
            d="M15 5.5V1.5H11V3H8.5C8.23488 3.0003 7.9807 3.10576 7.79323 3.29323C7.60576 34807 7.5003 3.73488 7.5 4V8H5V6.5H1V10.5H5V9H7.5V13C7.5003 13.2651 7.60576 13.5193 7.79323 13.7068C7.9807 13.8942 8.23488 13.9997 8.5 14H11V15.5H15V11.5H11V13H8.5V9H11V10.5H15V6.5H11V8H8.5V4H11V5.5H15ZM4 9.5H2V7.5H4V9.5ZM12 12.5H14V14.5H12V12.5ZM12 7.5H14V9.5H12V7.5ZM12 2.5H14V4.5H12V2.5Z"
            fill="currentColor"
        />
    </svg>
);

export default BurgerIcon;
