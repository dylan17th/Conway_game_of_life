import React from "react";
import { gridMaker, generations } from '../../helper_function/index'

const Buttons = props => {

    const clearingTheGid = () => {
        props.setNumberOfGenerations(0)
        props.setClickable(true)
        props.setMyGrid(gridMaker(() => 0, props.row, props.cols))
    }
    const handleSelect = e => {
        props.setSpeed({
            value: e.target.value
        })
        props.mySpeed.current = e.target.value
    }
    const randomGid = () => {
        props.setNumberOfGenerations(0)
        props.setClickable(true)
        props.setMyGrid(gridMaker(() => Math.random() > .8 ? 1 : 0, props.row, props.cols))
    }

    return (
        <div className="buttons-div">
            <button className="button"
                onClick={() => {
                    props.setClickable(false);
                    props.isRunning.current = false;
                    props.runGame();
                }}
            >Play</button>
            <button className="button" onClick={() => props.setClickable(true)}>Stop</button>
            <button className="button" onClick={clearingTheGid}>Clear</button>
            <button className="button" onClick={randomGid}>Random</button>
            <button className="button" onClick={() => generations(props.clickable, props.setOneGeneration, props.isOneGeneration, props.oneGeneration)
            }>{props.oneGeneration === true ? " All generations" : "One generation"}</button>
            <label>
                <select className="button-select" defaultValue={props.speed.value} onChange={handleSelect}>
                    <option value={1500}>Slow</option>
                    <option value={1000}>Normal</option>
                    <option value={500}>Fast</option>
                    <option value={200}>Super Fast</option>
                </select>
            </label>
            <button onClick={()=> props.openModal()}className="rules">Rules</button>
        </div>
    )
}

export default Buttons;