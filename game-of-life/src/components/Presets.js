import React from "react";
import { pulsarFunction, handleIteration, loophandler } from "../helper_function"

const Presets = ({ setClickedOnPulsar, setClickedOnGlider, setClickedOnToad, setClickedOnBlinker }) => {
    const pulsar = () => {
        const newGrid = loophandler()
        return pulsarFunction(newGrid)
    }
    const glider = () => {
        const rowCols = [[2, 2], [2, 4], [3, 3], [3, 4], [4, 3]]
        return handleIteration(rowCols, loophandler())
    }
    const toad = () => {
        const rowCols = [[7, 6], [7, 7], [7, 8], [8, 5], [8, 6], [8, 7]]
        return handleIteration(rowCols, loophandler())
    }
    const blinker = () => {
        const rowCols = [[7, 6], [7, 7], [7, 8]]
        return handleIteration(rowCols, loophandler())
    }
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
                <div onClick={() => setClickedOnPulsar(true)} className="the-presets">
                    <h4>Pulsar</h4>
                    {displayer(pulsar())}
                </div>
                <div onClick={() => setClickedOnGlider(true)} className="the-presets">
                    <h4>Glider</h4>
                    {displayer(glider())}
                </div>
                <div onClick={() => setClickedOnToad(true)} className="the-presets">
                    <h4>Toad</h4>
                    {displayer(toad())}
                </div>
                <div onClick={() => setClickedOnBlinker(true)} className="the-presets">
                    <h4>Blinker</h4>
                    {displayer(blinker())}
                </div>
            </section>
        </div>
    )
}

export default Presets;