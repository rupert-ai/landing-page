import React, { FC } from "react";
import "./ButtonArrow.styles.scss";

interface ButtonArrowProps {
    color?: string;
}

const ButtonArrow: FC<ButtonArrowProps> = ({ color = "inherit" }) => (
    <svg className="button-arrow" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color }}>
        <path d="M8.295 4.205L12.085 8L2 8L2 9L12.085 9L8.295 12.795L9 13.5L14 8.5L9 3.5L8.295 4.205Z" fill="currentColor"></path>
    </svg>
);

export default ButtonArrow;
