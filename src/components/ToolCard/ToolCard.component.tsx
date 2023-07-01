import React, { FC } from "react";
import "./ToolCard.styles.scss";
import ButtonArrow from "../../assets/icons/ButtonArrow/ButtonArrow.icon";
import Button from "../../components/Button/Button.component";

interface ToolCardProps {
    title: string;
    description: string;
    link: string;
    gif: string;
}

const ToolCard: FC<ToolCardProps> = ({ title, description, link, gif }) => {
    return (
        <div className="tools__item">
            <div className="tools__item-info">
                <div className="tools__item-headline">
                    <h3>{title}</h3>
                    <div className="tools__item-para">
                        <p className="text-3">{description}</p>
                    </div>
                </div>
                <Button link={link} text="Read more" model={"text"} icon={<ButtonArrow />} />
            </div>
            <img src={gif} loading="lazy" alt="" className="tools__item-icon" />
        </div>
    );
};

export default ToolCard;
