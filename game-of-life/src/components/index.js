import React, { useState } from "react";
import About from "./About_Algorithm";
import Presets from './Presets';
import Grid from './Grid/index';
import Rules from './Rules'

const Main = () => {
    return (
        <div className="main-component">
            <h1 className="title-for-page">Conway's Game of Life</h1>
            <section className="grid-components">
                <Grid />
            </section>
            <section className="presets-components">
                <Presets />
                <section className="rules-components">
                    <Rules />
                </section>
            </section>
            <About />
        </div>
    )
}

export default Main;