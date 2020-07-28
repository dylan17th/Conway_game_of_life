import React, { useState } from "react";
import About from "./About_Algorithm";
import Presets from './Presets';
import Grid from './Grid/index';
import Rules from './Rules';

const Main = () => {
    const [clickedOnPulsar, setClickedOnPulsar] = useState(false)
    const [clickedOnGlider, setClickedOnGlider] = useState(false)
    const [clickedOnBlinker, setClickedOnBlinker] = useState(false)
    const [clickedOnToad, setClickedOnToad] = useState(false)

    return (
        <div className="main-component">
            <h1 className="title-for-page">Conway's Game of Life</h1>
            <section className="grid-components">
                <Grid
                    clickedOnPulsar={clickedOnPulsar}
                    clickedOnGlider={clickedOnGlider}
                    clickedOnBlinker={clickedOnBlinker}
                    clickedOnToad={clickedOnToad}
                    setClickedOnPulsar={setClickedOnPulsar}
                    setClickedOnGlider={setClickedOnGlider}
                    setClickedOnBlinker={setClickedOnBlinker}
                    setClickedOnToad={setClickedOnToad}
                />
            </section>
            <section className="presets-components">
                <Presets
                    setClickedOnPulsar={setClickedOnPulsar}
                    setClickedOnGlider={setClickedOnGlider}
                    setClickedOnBlinker={setClickedOnBlinker}
                    setClickedOnToad={setClickedOnToad}
                />
                <section className="rules-components">
                    <Rules />
                </section>
            </section>
            <About />
        </div>
    )
}

export default Main;