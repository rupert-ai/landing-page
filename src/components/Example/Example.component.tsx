import React, { FC, MouseEventHandler } from "react";
import "./Example.styles.scss";

interface ExampleProps {
    image?: string;
    imageCover?: string;
    height?: string;
    onClick?: MouseEventHandler<HTMLDivElement>;
    selected?: boolean; 
}


const Example: FC<ExampleProps> = ({ image, imageCover, height, onClick, selected }) => {
    return (
        <div onClick={onClick} className={`example-item ${height ? height : ""} ${selected ? "selected" : ""}`}>
            <div className="example-item-overlay">
                <div className="example-item-overlay-screen"></div>
                <div className="example-item-overlay-select">
                    <div className="example-item-overlay-select-box "></div>
                </div>
            </div>
            <img alt="" className={`example-item-image ${imageCover ? imageCover : "contain"}`} src={image} />
        </div>
    );
};


export default Example;
