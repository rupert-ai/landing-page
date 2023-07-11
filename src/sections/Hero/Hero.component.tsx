import React, { FC, useEffect, useRef } from "react";
import gsap from "gsap";
import "./Hero.styles.scss";
import Button from "../../components/Button/Button.component";

import heroBGBlur from "../../assets/images/hero-blur.webp";

import heroGridPlaceholderA from "../../assets/images/hero-grid/hero-grid-placeholders/grid-placeholder-1.svg";
import heroGridPlaceholderB from "../../assets/images/hero-grid/hero-grid-placeholders/grid-placeholder-2.svg";

import heroGridImageA from "../../assets/images/hero-grid/hero-grid-images/grid-image-1.webp";
import heroGridImageB from "../../assets/images/hero-grid/hero-grid-images/grid-image-2.webp";
import heroGridImageC from "../../assets/images/hero-grid/hero-grid-images/grid-image-3.webp";
import heroGridImageD from "../../assets/images/hero-grid/hero-grid-images/grid-image-4.webp";
import heroGridImageE from "../../assets/images/hero-grid/hero-grid-images/grid-image-5.webp";
import heroGridImageF from "../../assets/images/hero-grid/hero-grid-images/grid-image-6.webp";
import heroGridImageG from "../../assets/images/hero-grid/hero-grid-images/grid-image-7.webp";
import heroGridImageH from "../../assets/images/hero-grid/hero-grid-images/grid-image-8.webp";
import heroGridImageI from "../../assets/images/hero-grid/hero-grid-images/grid-image-9.webp";

const Hero: FC = () => {
    const gridItemRefs = useRef<Array<HTMLDivElement>>([]);

    const shuffleArray = (array: any[]) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    useEffect(() => {
        const executeTimeline = () => {
            // Create a timeline
            const tl = gsap.timeline();

            // Shuffle the grid item refs array
            const shuffledRefs = shuffleArray(gridItemRefs.current);

            // Add animations to the timeline for each grid item
            shuffledRefs.forEach((gridItem) => {
                tl.to(gridItem.querySelector(".hero__grid-item-image"), {
                    opacity: 1,
                    duration: 0.25,
                    delay: 0.25,
                });
            });

            // After all the initial animations are complete, decrease opacity of 5 random items
            tl.add(() => {
                // Shuffle the array again
                const reshuffledRefs = shuffleArray([...shuffledRefs]);

                // Select the first 5 items
                const selectedItems = reshuffledRefs.slice(0, 5);

                // Decrease opacity for each of the selected items
                selectedItems.forEach((item) => {
                    gsap.to(item, {
                        opacity: 0.2,
                        delay: 1,
                        duration: 1.3,
                    });
                });

                // Increase opacity for the remaining items
                const remainingItems = reshuffledRefs.slice(5);
                remainingItems.forEach((item) => {
                    gsap.to(item.querySelector(".hero__grid-item-overlay"), {
                        opacity: 1,
                        delay: 1,
                        duration: 1.3,
                    });
                });
            });

            // Reset all opacities to their original state and then restart the timeline
            tl.add(() => {
                shuffledRefs.forEach((item) => {
                    gsap.to(item, {
                        opacity: 1,
                        delay: 8,
                        duration: 1.3,
                    });
                    gsap.to(item.querySelector(".hero__grid-item-image"), {
                        opacity: 0,
                        delay: 8,
                        duration: 1.3,
                    });
                    gsap.to(item.querySelector(".hero__grid-item-overlay"), {
                        opacity: 0,
                        delay: 8,
                        duration: 1.3,
                    });
                });
            }).add(() => {
                gsap.delayedCall(10, executeTimeline); // Wait for 5 seconds, then restart the timeline
            });
        };

        executeTimeline(); // Start the timeline initially
    }, []);

    // Create a function to add elements to the refs array
    const addToRefs = (el: HTMLDivElement) => {
        if (el && !gridItemRefs.current.includes(el)) {
            gridItemRefs.current.push(el);
        }
    };

    return (
        <section className="hero">
            <div className="hero__background">
                <div className="hero__overlay"></div>
                <img alt="" className="hero__blur" src={heroBGBlur} />
            </div>
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
                        <Button link={"/"} text="Try for free" textSize={"medium"} color="blue" />
                        <Button link={"/"} text="Demo" textSize={"medium"} color="transparent" />
                    </div>
                </div>
                <div className="hero__visual">
                    <div className="hero__grid">
                        <div className="hero__grid-item" ref={addToRefs}>
                            <img src={heroGridPlaceholderB} alt="" className="hero__grid-item-placeholder" />
                            <img src={heroGridImageA} alt="" className="hero__grid-item-image" />
                            <div className="hero__grid-item-overlay">
                                <div className="hero__grid-item-overlay-tag">
                                    <div className="text-3">High CTR</div>
                                </div>
                            </div>
                        </div>
                        <div className="hero__grid-item" ref={addToRefs}>
                            <img src={heroGridPlaceholderA} alt="" className="hero__grid-item-placeholder" />
                            <img src={heroGridImageB} alt="" className="hero__grid-item-image" />
                            <div className="hero__grid-item-overlay">
                                <div className="hero__grid-item-overlay-tag">
                                    <div className="text-3">High CTR</div>
                                </div>
                            </div>
                        </div>
                        <div className="hero__grid-item" ref={addToRefs}>
                            <img src={heroGridPlaceholderB} alt="" className="hero__grid-item-placeholder" />
                            <img src={heroGridImageC} alt="" className="hero__grid-item-image" />
                            <div className="hero__grid-item-overlay">
                                <div className="hero__grid-item-overlay-tag">
                                    <div className="text-3">High CTR</div>
                                </div>
                            </div>
                        </div>
                        <div className="hero__grid-item" ref={addToRefs}>
                            <img src={heroGridPlaceholderB} alt="" className="hero__grid-item-placeholder" />
                            <img src={heroGridImageD} alt="" className="hero__grid-item-image" />
                            <div className="hero__grid-item-overlay">
                                <div className="hero__grid-item-overlay-tag">
                                    <div className="text-3">High CTR</div>
                                </div>
                            </div>
                        </div>
                        <div className="hero__grid-item" ref={addToRefs}>
                            <img src={heroGridPlaceholderB} alt="" className="hero__grid-item-placeholder" />
                            <img src={heroGridImageE} alt="" className="hero__grid-item-image" />
                            <div className="hero__grid-item-overlay">
                                <div className="hero__grid-item-overlay-tag">
                                    <div className="text-3">High CTR</div>
                                </div>
                            </div>
                        </div>
                        <div className="hero__grid-item" ref={addToRefs}>
                            <img src={heroGridPlaceholderB} alt="" className="hero__grid-item-placeholder" />
                            <img src={heroGridImageF} alt="" className="hero__grid-item-image" />
                            <div className="hero__grid-item-overlay">
                                <div className="hero__grid-item-overlay-tag">
                                    <div className="text-3">High CTR</div>
                                </div>
                            </div>
                        </div>
                        <div className="hero__grid-item" ref={addToRefs}>
                            <img src={heroGridPlaceholderB} alt="" className="hero__grid-item-placeholder" />
                            <img src={heroGridImageG} alt="" className="hero__grid-item-image" />
                            <div className="hero__grid-item-overlay">
                                <div className="hero__grid-item-overlay-tag">
                                    <div className="text-3">High CTR</div>
                                </div>
                            </div>
                        </div>
                        <div className="hero__grid-item" ref={addToRefs}>
                            <img src={heroGridPlaceholderA} alt="" className="hero__grid-item-placeholder" />
                            <img src={heroGridImageH} alt="" className="hero__grid-item-image" />
                            <div className="hero__grid-item-overlay">
                                <div className="hero__grid-item-overlay-tag">
                                    <div className="text-3">High CTR</div>
                                </div>
                            </div>
                        </div>
                        <div className="hero__grid-item" ref={addToRefs}>
                            <img src={heroGridPlaceholderB} alt="" className="hero__grid-item-placeholder" />
                            <img src={heroGridImageI} alt="" className="hero__grid-item-image" />
                            <div className="hero__grid-item-overlay">
                                <div className="hero__grid-item-overlay-tag">
                                    <div className="text-3">High CTR</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
