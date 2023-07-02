import React from "react";
import Header from "./components/Header/Header.component";
import Flow from "./sections/Flow/Flow.section";
import Tools from "./sections/Tools/Tools.section";
import Hero from "./sections/Hero/Hero.section";
import Demo from "./sections/Demo/Demo.section";

function App() {

    return (
        <div className="main">
            <Header />
            <Hero />
            <Demo />
            <Flow />
            <Tools />
        </div>
    );
}

export default App;
