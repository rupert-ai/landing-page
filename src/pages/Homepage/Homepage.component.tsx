import React, { FC } from "react";
import "./Homepage.styles.scss";
import Hero from "../../sections/Hero/Hero.component";
import Demo from "../../sections/Demo/Demo.component";
import Flow from "../../sections/Flow/Flow.component";
import Tools from "../../sections/Tools/Tools.component";

const Homepage: FC = () => {
    return (
        <>
            <Hero />
            <Demo />
            <Flow />
            <Tools />
        </>
    );
};

export default Homepage;
