import React, { useState } from "react";
import { pulsarFunction } from "../helper_function"

const Presets = (props) => {
    const [pulsar, setPulsar] = useState(() => {
        const gridRows = [];
        for (let i = 0; i < 15; i++) {
            gridRows.push(Array.from(Array(15), () => 0))
        }
        return pulsarFunction(gridRows)
    })
    const [glider, setGlider] = useState(() => {
        const gridRows = [];
        for (let i = 0; i < 15; i++) {
            gridRows.push(Array.from(Array(15), () => 0)) //filling the whole grid with zeros
        }
        gridRows[2][2] = 1
        gridRows[2][4] = 1
        gridRows[3][3] = 1
        gridRows[3][4] = 1
        gridRows[4][3] = 1
        return gridRows
    })
    const [toad, setToad] = useState(() => {
        const gridRows = [];
        for (let i = 0; i < 15; i++) {
            gridRows.push(Array.from(Array(15), () => 0))
        }
        gridRows[7][6] = 1
        gridRows[7][7] = 1
        gridRows[7][8] = 1
        gridRows[8][5] = 1
        gridRows[8][6] = 1
        gridRows[8][7] = 1
        return gridRows
    })
    const [blinker, setBlinker] = useState(() => {
        const gridRows = [];
        for (let i = 0; i < 15; i++) {
            gridRows.push(Array.from(Array(15), () => 0))
        }
        gridRows[7][6] = 1
        gridRows[7][7] = 1
        gridRows[7][8] = 1
        return gridRows
    })
    const displayer = (startingState) => {
        return (
            <div style={{ display: "grid", gridTemplateColumns: `repeat(${15}, 9px)` }}>
                {startingState.map((rows, index) => rows.map((column, i) =>
                    (<div
                        key={index + Math.random()}
                        style={{
                            height: "9px",
                            width: "9px",
                            border: "solid .5px black",
                            backgroundColor: startingState[index][i] ? "#0059b3" : "lightgrey"
                        }}>
                    </div>)))}
            </div>
        )
    }
    return (
        <div className="presets-div">
            <h3 className="presets-title">Presets:</h3>
            <section className="presets-section">
                <div onClick={() => props.setClickedOnPulsar(true)} className="the-presets">
                    <h4>Pulsar</h4>
                    {displayer(pulsar)}
                </div>
                <div onClick={() => props.setClickedOnGlider(true)} className="the-presets">
                    <h4>Glider</h4>
                    {displayer(glider)}
                </div>
                <div onClick={() => props.setClickedOnToad(true)} className="the-presets">
                    <h4>Toad</h4>
                    {displayer(toad)}
                </div>
                <div onClick={() => props.setClickedOnBlinker(true)} className="the-presets">
                    <h4>Blinker</h4>
                    {displayer(blinker)}
                </div>
            </section>
        </div>
    )
}

export default Presets;