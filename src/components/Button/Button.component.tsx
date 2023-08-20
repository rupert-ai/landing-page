import React, { FC, MouseEventHandler, ReactNode } from "react";
import "./Button.styles.scss";

interface ButtonProps {
    text: string;
    type?: "button" | "submit" | "reset";
    link?: string;
    color?: string | "blue";
    size?: string | "big" | "small";
    textSize?: "small" | "medium" | "large";
    inactive?: boolean;
    model?: string | "text";
    icon?: ReactNode;
    isIconBig?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

const Button: FC<ButtonProps> = ({ text, type, link, color, size, textSize, inactive, icon, isIconBig, model, onClick }) => {
    const classes = ["button"];
    if (icon) classes.push("button--icon");
    if (isIconBig) classes.push("button--icon_big");
    if (model) classes.push("button--text");
    if (color) classes.push(`button--${color}`);
    if (size) classes.push(`button--${size}`);
    if (inactive) classes.push("button--inactive");

    const textClasses = `text--button${textSize ? `_${textSize}` : ""}`;

    return link ? (
        <a href={link} className={classes.join(" ")} onClick={onClick}>
            <div className={textClasses}>{text}</div>
            {icon}
        </a>
    ) : (
        <button type={type} className={classes.join(" ")} onClick={onClick}>
            <div className={textClasses}>{text}</div>
            {icon}
        </button>
    );
};

export default Button;
