import React, { FC } from "react";
import "./Flow.styles.scss";

import stepA from "../../assets/images/flow/step-1.png";
import stepB from "../../assets/images/flow/step-2.jpg";
import stepC from "../../assets/images/flow/step-3.jpg";

const Flow: FC = () => {
    return (
        <section className="flow">
            <div className="flow__wrapper">
                <div className="flow__headline">
                    <div className="flow__heading">
                        <h1 className="h1">How does it work?</h1>
                    </div>
                    <svg className="flow__arrow" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30.625 79.625V73.5H69.1819L18.375 22.6931L22.6931 18.375L73.5 69.1819V30.625H79.625V79.625H30.625Z" fill="#464646"></path>
                    </svg>
                </div>
                <div className="flow__list">
                    <div className="flow__step">
                        <img src={stepA} alt="" className="flow__step-image" />
                        <div className="flow__step-info">
                            <div className="flow__step-headline">
                                <div className="flow__step-label">
                                    <div className="text--button">Step 1</div>
                                </div>
                                <div className="flow__step-title">
                                    <h4>Upload your product image</h4>
                                </div>
                            </div>
                            <div className="flow__step-para">
                                <div className="text-3">Also works with your product feed catalog :)</div>
                            </div>
                        </div>
                    </div>
                    <div className="flow__step">
                        <img src={stepB} alt="" className="flow__step-image" />
                        <div className="flow__step-info">
                            <div className="flow__step-headline">
                                <div className="flow__step-label">
                                    <div className="text--button">Step 2</div>
                                </div>
                                <div className="flow__step-title">
                                    <h4>Rupert AI will generate hundreds of product ad variations in minutes</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flow__step">
                        <img src={stepC} alt="" className="flow__step-image" />
                        <div className="flow__step-info">
                            <div className="flow__step-headline">
                                <div className="flow__step-label">
                                    <div className="text--button">Step 3</div>
                                </div>
                                <div className="flow__step-title">
                                    <h4>Rupert AI will rank all Ad variations predicted for best performance</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Flow;
