import React, { useState, useCallback, useRef, useEffect } from "react";
import Buttons from "./Buttons";
import Presets from './Presets'
import { handleMainBlinker, handleMainToad, handleMainPulsar, handleMainGlider, gridMaker, settingState, handlingIndexCheck, effectHookHelper } from '../../helper_function/index';

const Grid = ({ openModal, clickedOnPulsar, setClickedOnPulsar, clickedOnGlider, setClickedOnGlider, clickedOnBlinker, setClickedOnBlinker, clickedOnToad, setClickedOnToad }) => {
    const rows = 25;
    const cols = 25;
    const [clickable, setClickable] = useState(true);
    const isRunning = useRef(clickable);
    const [oneGeneration, setOneGeneration] = useState(false)
    const isOneGeneration = useRef(oneGeneration);
    const [speed, setSpeed] = useState({ value: 1000 })
    const mySpeed = useRef(speed)
    const [myGrid, setMyGrid] = useState(() => gridMaker(() => 0, rows, cols));
    const indexPointsNeeded = [[0, 1], [0, -1], [1, -1], [-1, 1], [1, 1], [-1, -1], [1, 0], [-1, 0]]
    const [numberOfGenerations, setNumberOfGenerations] = useState(0)

    useEffect(() => {
        effectHookHelper(clickedOnPulsar, setClickedOnPulsar, setMyGrid, handleMainPulsar)
        effectHookHelper(clickedOnGlider, setClickedOnGlider, setMyGrid, handleMainGlider)
        effectHookHelper(clickedOnBlinker, setClickedOnBlinker, setMyGrid, handleMainBlinker)
        effectHookHelper(clickedOnToad, setClickedOnToad, setMyGrid, handleMainToad)
    }, [clickedOnPulsar, setClickedOnPulsar, clickedOnGlider, setClickedOnGlider, clickedOnBlinker, setClickedOnBlinker, clickedOnToad, setClickedOnToad]);

    const findNeighbors = useCallback(() => {
        setMyGrid(prevState => {
            let cloneGrid = JSON.parse(JSON.stringify(prevState))
            //making a for loop inside of a for loop to loop through every element in the grid
            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    let neighbors = handlingIndexCheck(indexPointsNeeded, prevState, i, j, rows, cols)
                    //checking to see if the a cell has less than 2 neighbor or more than 3
                    if (neighbors < 2 || neighbors > 3) {
                        cloneGrid[i][j] = 0
                    } else if (prevState[i][j] === 0 && neighbors === 3) {//checking to see if any dead cells should be set to alive 
                        cloneGrid[i][j] = 1
                    }
                }
            } return cloneGrid //setting the new state of the grid
        })
    }, [indexPointsNeeded]);

    //I am not recreating the rungame function so I need to useRef/isRunning.current
    isRunning.current = clickable
    isOneGeneration.current = oneGeneration;
    mySpeed.current = speed.value
    const runGame = useCallback(() => {
        if (isRunning.current) return; // checking to see if the play button was pressed 
        findNeighbors()
        setNumberOfGenerations(prevState => prevState += 1)//setting the current generation
        if (isOneGeneration.current) return;
        setTimeout(runGame, mySpeed.current) //using recursion and am going to keep running the game every second 
    }, [findNeighbors])

    return (
        <>
            <div className='grid-title'>
                <h3>Generations: {numberOfGenerations === 0 ? undefined : numberOfGenerations}</h3>
                <div className="grid-table">
                    {myGrid.map((rows, index) => rows.map((column, i) =>
                        (<div
                            onClick={() => settingState(clickable, setMyGrid, index, i)}
                            key={index + Math.random()}
                            className="box"
                            style={{ backgroundColor: myGrid[index][i] ? "#0059b3" : "lightgrey" }}>
                        </div>)))}
                </div>
            </div>
            <div className="component-holder">
                <section className="presets-components">
                    <Presets
                        setClickedOnPulsar={setClickedOnPulsar}
                        setClickedOnGlider={setClickedOnGlider}
                        setClickedOnBlinker={setClickedOnBlinker}
                        setClickedOnToad={setClickedOnToad}
                    />
                </section>
                <Buttons
                    setClickable={setClickable}
                    runGame={runGame}
                    isRunning={isRunning}
                    clickable={clickable}
                    myGrid={myGrid}
                    setMyGrid={setMyGrid}
                    row={rows}
                    cols={cols}
                    oneGeneration={oneGeneration}
                    setOneGeneration={setOneGeneration}
                    setNumberOfGenerations={setNumberOfGenerations}
                    isOneGeneration={isOneGeneration}
                    setSpeed={setSpeed}
                    speed={speed}
                    mySpeed={mySpeed}
                    openModal={openModal}
                />
            </div>
        </>
    )
}

export default Grid;