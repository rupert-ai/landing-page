import React from "react";
import Header from "./components/Header/Header.component";
import Flow from "./sections/Flow/Flow.component";
import Tools from "./sections/Tools/Tools.component";
import Hero from "./sections/Hero/Hero.component";
import Demo from "./sections/Demo/Demo.component";

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
