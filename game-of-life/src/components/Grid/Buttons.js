import React from "react";

const Buttons = props => {

    const clearingTheGid = () => {
        const gridRows = [];
        for (let i = 0; i < props.row; i++) {
            gridRows.push(Array.from(Array(props.cols), () => 0)) //filling the whole grid with zeros
        }
        props.setNumberOfGenerations(0)
        props.setMyGrid(gridRows)
        props.setClickable(true)
    }
    const handleSelect = e => {
            props.setSpeed({
                value: e.target.value
            })
            props.mySpeed.current = e.target.value
    }
    const randomGid = () => {
        const gridRows = [];
        for (let i = 0; i < props.row; i++) {
            gridRows.push(Array.from(Array(props.cols), () => Math.random() > .8 ? 1 : 0))
        }
        props.setNumberOfGenerations(0)
        props.setMyGrid(gridRows)
        props.setClickable(true)
    }

    return (
        <div className="buttons-div">
            <button
                onClick={() => {
                    props.setClickable(!props.clickable);
                    props.isRunning.current = false;
                    props.runGame();
                }}
                className="button">Play</button>
            <button onClick={() => props.setClickable(true)} className="button">Stop</button>
            <button className="button" onClick={clearingTheGid}>Clear</button>
            <button className="button" onClick={randomGid}>Random</button>
            <button className="button" onClick={() => {
                if (props.clickable === true) {
                    props.setOneGeneration(!props.oneGeneration)
                    props.isOneGeneration.current = !props.isOneGeneration;
                }
            }}>{props.oneGeneration === true ? " See all generations" : "See one Generation"}</button>
            <label>
                <select className="button" defaultValue={props.speed.value} onChange={handleSelect}>
                    <option value={1500}>Slow</option>
                    <option value={1000}>Normal</option>
                    <option value={500}>Fast</option>
                    <option value={200}>Super Fast</option>
                </select>
            </label>
        </div>
    )
}

export default Buttons;