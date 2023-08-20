import React, { FC } from "react";
import "./ToolCard.styles.scss";
import ButtonArrow from "../../assets/icons/ButtonArrow/ButtonArrow.icon";
import Button from "../../components/Button/Button.component";

interface ToolCardProps {
    title: string;
    description: string;
    link: string;
    linkText?: string;
    gif: string;
}

const ToolCard: FC<ToolCardProps> = ({ title, description, link, linkText, gif }) => {
    return (
        <a href={link} className="tools__item">
            <div className="tools__item-info">
                <div className="tools__item-headline">
                    <h3>{title}</h3>
                    <div className="tools__item-para">
                        <p className="text-3">{description}</p>
                    </div>
                </div>
                <Button type="button" text={linkText ? linkText : "Read more"} model={"text"} icon={<ButtonArrow />} />
            </div>
            <img src={gif} loading="lazy" alt="" className="tools__item-icon" />
        </a>
    );
};

export default ToolCard;
