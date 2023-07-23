import React, { FC, MouseEventHandler } from "react";
import "./Example.styles.scss";

import lockedIcon from "../../assets/icons/locked.svg";

interface ExampleProps {
    image?: string;
    imageCover?: string;
    height?: string;
    size?: string;
    onClick?: MouseEventHandler<HTMLDivElement>;
    selected?: boolean;
    isLocked?: boolean;
}

const Example: FC<ExampleProps> = ({ image, imageCover, height, size, onClick, selected, isLocked }) => {
    return (
        <div onClick={onClick} className={`example-item ${height ? height : ""} ${selected ? "selected" : ""} ${size ? size : ""} ${isLocked ? "locked" : ""}`}>
            <div className="example-item-overlay">
                <div className="example-item-overlay-screen"></div>
                <div className="example-item-overlay-select">
                    <div className="example-item-overlay-select-box "></div>
                </div>
                {isLocked && (
                    <div className="example-item-overlay-locked">
                        <img className="example-item-overlay-locked-icon" alt="" src={lockedIcon} />
                    </div>
                )}
            </div>
            <img alt="" className={`example-item-image ${imageCover ? imageCover : "contain"}`} src={image} />
        </div>
    );
};

export default Example;
