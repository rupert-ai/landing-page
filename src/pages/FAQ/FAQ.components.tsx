import React, { FC, useState, useEffect, useRef } from "react";
import "./FAQ.styles.scss";
import Tools from "../../sections/Tools/Tools.component";
import { gsap } from "gsap";

type FAQItemProps = {
    isOpen: boolean;
    toggle: () => void;
    question: string;
    answer: string;
};

const FAQItem: FC<FAQItemProps> = ({ isOpen, toggle, question, answer }) => {
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const arrowRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        if (dropdownRef.current) {
            if (isOpen) {
                gsap.to(dropdownRef.current, { height: "auto" });
                gsap.to(arrowRef.current, { rotation: "0deg" });
            } else {
                gsap.to(dropdownRef.current, { height: "0px" });
                gsap.to(arrowRef.current, { rotation: "180deg" });
            }
        }
    }, [isOpen]);

    return (
        <div className="faq__item">
            <div className="faq__item-trigger" onClick={toggle}>
                <h4 className="text-1">{question}</h4>
                <svg ref={arrowRef} className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
                    <path d="M8 5L13 10L12.3 10.7L8 6.4L3.7 10.7L3 10L8 5Z" fill="#F4F4F4" />
                </svg>
            </div>
            <div className="faq__item-dropdown" ref={dropdownRef}>
                <div className="faq__item-dropdown-wrapper">
                    <div className="text-2">{answer}</div>
                </div>
            </div>
        </div>
    );
};

const FAQ: FC = () => {
    const faqs = [
        {
            question: "How can I create pro compositions without a studio?",
            answer: "You don't need a photo studio anymore. With Rupert AI, you can replace photo backgrounds instantly. You don't even need a photo editing software to remove the background and place your own background instead. You can directly create all the scenes of your dreams, and change background by just describing it in plain English or selecting our templates!",
        },
        {
            question: "Do you have an app to change image background?",
            answer: "Rupert AI technology needed to change image background is available on our web application.",
        },
        {
            question: "How to create multiple versions of a picture background?",
            answer: "Our app replace image background and gives you four background image alternatives at a time. It's a great way to create different backgrounds for the same picture. Drop here a picture with a prompt, and we will create multiples versions of what you want, choose your favorite results and if you want you can pre-test them and see which ones will perform best as image ads.",
        },
        {
            question: "How can I remove original image background without complex editor?",
            answer: "You can change photo background online without any image retouch knowledge. Just drop your original image, and we will detect the subject and apply the background that you want.",
        },
        {
            question: "What else Rupert AI can do?",
            answer: "Rupert AI can pre-test your image ads and predict the champions for better performance.",
        },
    ];

    const [openStates, setOpenStates] = useState<boolean[]>(new Array(faqs.length).fill(false));

    const toggleFAQ = (index: number) => {
        const newOpenStates = [...openStates];
        newOpenStates[index] = !newOpenStates[index];
        setOpenStates(newOpenStates);
    };

    return (
        <>
            <section className="faq">
                <div className="faq__wrapper">
                    <div className="faq_content">
                        <h1>Frequently Asked Questions</h1>
                        <div className="faq__list">
                            {faqs.map((faq, index) => (
                                <FAQItem key={index} isOpen={openStates[index]} toggle={() => toggleFAQ(index)} question={faq.question} answer={faq.answer} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <Tools />
        </>
    );
};

export default FAQ;
