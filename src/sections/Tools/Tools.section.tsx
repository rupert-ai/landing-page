import React, { FC } from "react";
import ToolCard from "../../components/ToolCard/ToolCard.component";
import "./Tools.styles.scss";

import loadingGif from "../../assets/gifs/loading.gif";
import clickGif from "../../assets/gifs/click.gif";
import bulbGif from "../../assets/gifs/bulb.gif";
import chartGif from "../../assets/gifs/chart.gif";
import chatGif from "../../assets/gifs/chat.gif";
import coinGif from "../../assets/gifs/coin.gif";

const Tools: FC = () => {
    return (
        <section className="tools">
            <div className="tools__wrapper">
                <div className="tools__headline">
                    <h1 className="h1">Other tools we offer</h1>
                </div>
                <div className="tools__list">
                    <ToolCard
                        title="Attention analysis"
                        description="Moreover, AdGenius provides valuable recommendations for audience targeting, channel selection, and ad placement, ensuring that your ads reach the right people at the right time."
                        gif={loadingGif}
                        link=""
                    />
                    <ToolCard
                        title="CTR analysis"
                        description="Moreover, AdGenius provides valuable recommendations for audience targeting, channel selection, and ad placement, ensuring that your ads reach the right people at the right time."
                        gif={clickGif}
                        link=""
                    />
                    <ToolCard
                        title="Other tools"
                        description="Moreover, AdGenius provides valuable recommendations for audience targeting, channel selection, and ad placement, ensuring that your ads reach the right people at the right time."
                        gif={bulbGif}
                        link=""
                    />
                    <ToolCard
                        title="Contacts"
                        description="Moreover, AdGenius provides valuable recommendations for audience targeting, channel selection, and ad placement, ensuring that your ads reach the right people at the right time."
                        gif={chatGif}
                        link=""
                    />
                    <ToolCard
                        title="Case studies"
                        description="Moreover, AdGenius provides valuable recommendations for audience targeting, channel selection, and ad placement, ensuring that your ads reach the right people at the right time."
                        gif={chartGif}
                        link=""
                    />
                    <ToolCard
                        title="Pricing"
                        description="Moreover, AdGenius provides valuable recommendations for audience targeting, channel selection, and ad placement, ensuring that your ads reach the right people at the right time."
                        gif={coinGif}
                        link=""
                    />
                </div>
            </div>
        </section>
    );
};

export default Tools;
