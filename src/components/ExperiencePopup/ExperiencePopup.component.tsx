import React from "react";
import "./ExperiencePopup.styles.scss";

const ExperiencePopup: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    return (
        <div className="experience_popup">
            <div className="experience_popup__underlay" onClick={onClose}></div>
            <div className="experience_popup__card">
                <div className="experience_popup__content">
                    <div className="experience_popup__headline">
                        <h3>🚀 Experience Rupert</h3>
                        <svg
                            className="icon--medium"
                            data-experience-control="close"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="none"
                            onClick={onClose}>
                            <path
                                d="M15 5.875L14.125 5L10 9.125L5.875 5L5 5.875L9.125 10L5 14.125L5.875 15L10 10.875L14.125 15L15 14.125L10.875 10L15 5.875Z"
                                fill="#F4F4F4"
                            />
                        </svg>
                    </div>
                    <div className="experience_popup__info">
                        <div className="text-1">
                            Ready to experience the full potential of Rupert? Jump into our app and begin crafting high-performing ads that shine!
                        </div>
                    </div>
                </div>
                <div className="experience_popup__control">
                    <div className="experience_popup__cta" data-experience-control="close" onClick={onClose}>
                        <div className="text-2">Close</div>
                    </div>
                    <a href="http://ai.getrupert.com/" className="experience_popup__cta blue">
                        <div className="text-2">Go to App</div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ExperiencePopup;
