import React, { useState, useCallback, useRef } from "react";
import Buttons from "./Buttons"

const Grid = () => {
    const rows = 25;
    const cols = 25;
    const [clickable, setClickable] = useState(true);
    const isRunning = useRef(clickable);
    const [oneGeneration, setOneGeneration] = useState(false)
    const isOneGeneration = useRef(oneGeneration);
    const [speed, setSpeed] = useState({value: 1000})
    const mySpeed = useRef(speed)
    const [myGrid, setMyGrid] = useState(() => {
        const gridRows = [];
        for (let i = 0; i < rows; i++) {
            gridRows.push(Array.from(Array(cols), () => 0)) //filling the whole grid with zeros
        }
        return gridRows //setting my initial grid state to a 25 by 25 
    });
    const indexPointsNeeded = [[0, 1], [0, -1], [1, -1], [-1, 1], [1, 1], [-1, -1], [1, 0], [-1, 0]]
    const [numberOfGenerations, setNumberOfGenerations] = useState(0)

    function findNeighbors() {
        setMyGrid(prevState => {
            let cloneGrid = JSON.parse(JSON.stringify(prevState))
            //making a for loop inside of a for loop to loop through every element in the grid
            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    let neighbors = 0;
                    //looping through the indexes in the array about and and leveraging them when making neighbor comparisons
                    indexPointsNeeded.forEach(([rowIndex, colIndex]) => {
                        const rowI = i + rowIndex
                        const colJ = j + colIndex
                        // making sure the row and column that we are considering as a neighbor exist
                        if (rowI >= 0 && rowI < rows && colJ >= 0 && colJ < cols) {
                            // checking to see if that neighbor being considered is alive of dead
                            if (prevState[rowI][colJ] > 0) {
                                neighbors += prevState[rowI][colJ]
                            }
                        }
                    })
                    //checking to see if the a cell has less than 2 neighbor or more than 3
                    if (neighbors < 2 || neighbors > 3) {
                        cloneGrid[i][j] = 0
                    } else if (prevState[i][j] === 0 && neighbors === 3) {//checking to see if any dead cells should be set to alive 
                        cloneGrid[i][j] = 1
                    }
                }
            }
            return cloneGrid //setting the new state of the grid
        })

    };

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
    }, [])
    console.log(myGrid)
    return (
        <>
            <h3>Generations: {numberOfGenerations === 0 ? undefined : numberOfGenerations}</h3>
            <div className="grid-table" style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 15px)` }}>
                {myGrid.map((rows, index) => rows.map((column, i) =>
                    (<div onClick={() => {
                        if (clickable === true) {
                            setMyGrid(prevState => {
                                let clonedBoard = JSON.parse(JSON.stringify(prevState)) //Making a clone of the existing grid
                                clonedBoard[index][i] = clonedBoard[index][i] ? 0 : 1 //setting the clicked cell to the oposite of cur state
                                return clonedBoard
                            })
                        }
                    }} key={index + Math.random()} className="box" style={{ backgroundColor: myGrid[index][i] ? "seagreen" : null }}>
                    </div>)))}
            </div>
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
            />
        </>
    )
}

export default Grid;