import React, { FC, MouseEventHandler, ReactNode } from "react";
import "./Button.styles.scss";

interface ButtonProps {
    text: string;
    type?: "button" | "submit" | "reset";
    link?: string;
    color?: "blue" | "transparent";
    size?: "big" | "small";
    model?: "text";
    icon?: ReactNode;
    isIconBig?: boolean;
    isTextBig?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

const Button: FC<ButtonProps> = ({ text, type, link, color, size, icon, isIconBig, isTextBig, model, onClick }) => {
    const classes = ["button"];
    if (icon) classes.push("button--icon");
    if (isIconBig) classes.push("button--icon_big");
    if (model) classes.push("button--text");
    if (color) classes.push(`button--${color}`);
    if (size) classes.push(`button--${size}`);

    const textClasses = `text--button${isTextBig ? "_big" : ""}`;

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
