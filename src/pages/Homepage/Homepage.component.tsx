import React, { FC } from "react";
import "./Homepage.styles.scss";
import Hero from "../../sections/Hero/Hero.component";
import Demo from "../../sections/Demo/Demo.component";
import Flow from "../../sections/Flow/Flow.component";
import Tools from "../../sections/Tools/Tools.component";

interface HomepageProps {
    setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const Homepage: FC<HomepageProps> = ({ setShowPopup }) => {
    return (
        <>
            <Hero setShowPopup={setShowPopup} />
            <Demo setShowPopup={setShowPopup} />
            <Flow />
            <Tools />
        </>
    );
};

export default Homepage;
