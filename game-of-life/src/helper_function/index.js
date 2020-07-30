import background from '../images/new-background.png';

//functions used in the presets components
export const pulsarFunction = (gridRows) => {
    const rowCols = [[1, 3], [1, 4], [1, 5], [1, 9], [1, 10], [1, 11], [3, 6], [4, 6], [5, 6], [3, 1],
    [4, 1], [5, 1], [6, 5], [6, 4], [6, 3], [3, 8], [4, 8], [5, 8], [3, 13], [4, 13], [5, 13],
    [6, 9], [6, 10], [6, 11], [8, 9], [8, 10], [8, 11], [8, 5], [8, 4], [8, 3], [9, 1], [10, 1], [11, 1],
    [13, 3], [13, 4], [13, 5], [13, 9], [13, 10], [13, 11], [9, 6], [10, 6], [11, 6], [9, 8], [10, 8], [11, 8],
    [9, 13], [10, 13], [11, 13]]
    return handleIteration(rowCols, gridRows)
}
export const loophandler = () => {
    const gridRows = [];
    for (let i = 0; i < 15; i++) {
        gridRows.push(Array.from(Array(15), () => 0))
    }
    return gridRows
}
export const handleIteration = (rowCols, gridRows) => {
    const newGrid = gridRows
    rowCols.forEach(([row, col]) => {
        newGrid[row][col] = 1
    })
    return newGrid
}

//functions used in the grid component
export const handleMainBlinker = (grid) => {
    const rowCols = [[12, 11], [12, 12], [12, 13]]
    return handleIteration(rowCols, grid)
}
export const handleMainToad = (grid) => {
    const rowCols = [[12, 11], [12, 12], [12, 13], [11, 12], [11, 13], [11, 14]]
    return handleIteration(rowCols, grid)
}
export const handleMainGlider = (grid) => {
    const rowCols = [[4, 4], [4, 6], [5, 5], [5, 6], [6, 5]]
    return handleIteration(rowCols, grid)
}
export const handleMainPulsar = (grid) => {
    const rowCols = [[2, 4], [2, 5], [2, 6], [2, 10], [2, 11], [2, 12], [4, 7], [5, 7],
    [6, 7], [4, 2], [5, 2], [6, 2], [7, 6], [7, 5], [7, 4], [4, 9], [5, 9], [6, 9], [4, 14],
    [5, 14], [6, 14], [7, 10], [7, 11], [7, 12], [9, 10], [9, 11], [9, 12], [9, 6], [9, 5],
    [9, 4], [10, 2], [11, 2], [12, 2], [14, 4], [14, 5], [14, 6], [14, 10], [14, 11], [14, 12],
    [10, 7], [11, 7], [12, 7], [10, 9], [11, 9], [12, 9], [10, 14], [11, 14], [12, 14]]
    return handleIteration(rowCols, grid)
}
export const gridMaker = (callback, rows, cols) => {
    const gridRows = [];
    for (let i = 0; i < rows; i++) {
        gridRows.push(Array.from(Array(cols), callback)) //filling the whole grid with zeros
    }
    return gridRows
}
export const settingState = (clickable, setMyGrid, index, i) => {
    if (clickable === true) {
        setMyGrid(prevState => {
            let clonedBoard = JSON.parse(JSON.stringify(prevState)) //Making a clone of the existing grid
            clonedBoard[index][i] = clonedBoard[index][i] ? 0 : 1 //setting the clicked cell to the oposite of cur state
            return clonedBoard
        })
    }
}
export const handlingIndexCheck = (indexPointsNeeded, prevState, i, j, rows, cols) => {
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
    return neighbors
}
export const EffectHookHelper = (clickedOn, setClickedOn, stateOfGrid, callbackFunction) => {
    if (clickedOn) {
        setClickedOn(false)
        stateOfGrid(prevState => {
            return callbackFunction(prevState)
        })
    }
}

//functions used in buttons
export const generations = (clickable, setOneGeneration, isOneGeneration, oneGeneration) => {
    if (clickable === true) {
        setOneGeneration(!oneGeneration)
        isOneGeneration.current = !isOneGeneration;
    }
}

//const used to style to modal
export const customStyles = {
    content : {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: "70%",
      height: "35%",
      backgroundImage: `url(${background})`,
      borderRadius: "10px",
      lineHeight: "2rem",

    }
  };