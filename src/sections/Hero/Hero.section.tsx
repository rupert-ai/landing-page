import React, { FC } from "react";
import "./Hero.styles.scss";
import Button from "../../components/Button/Button.component";

const Hero: FC = () => {
    return (
        <section className="hero">
            <div className="hero__wrapper">
                <div className="hero__info">
                    <div className="hero__headline">
                        <h1>Create and Optimize Image Ads for Maximum Impact</h1>
                        <div className="hero__para">
                            <p className="text-3">
                                Create &amp; Pre-test your assets in seconds with deep learning and cognitive science models built with millions of human
                                reactions
                            </p>
                        </div>
                    </div>
                    <div className="hero__cta">
                        <Button link={"/"} text="Try for free" isTextBig={true} color="blue" />
                        <Button link={"/"} text="Demo" isTextBig={true} color="transparent" />
                    </div>
                </div>
                <div className="hero__visual">
                    <div className="hero__grid">
                        <div className="hero__grid-item"></div>
                        <div className="hero__grid-item"></div>
                        <div className="hero__grid-item"></div>
                        <div className="hero__grid-item"></div>
                        <div className="hero__grid-item"></div>
                        <div className="hero__grid-item"></div>
                        <div className="hero__grid-item"></div>
                        <div className="hero__grid-item"></div>
                        <div className="hero__grid-item"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
