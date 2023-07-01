import React, { FC, MouseEventHandler } from "react";
import "./Example.styles.scss";

interface ExampleProps {
    image?: string;
    onClick?: MouseEventHandler<HTMLDivElement>;
}

const Example: FC<ExampleProps> = ({ image, onClick }) => {
    return (
        <div onClick={onClick} className="example-item">
            <img alt="" className="example-item-image" src={image} />
        </div>
    );
};

export default Example;
