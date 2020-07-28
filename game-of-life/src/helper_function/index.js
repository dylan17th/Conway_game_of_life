export const pulsarFunction = (gridRows) =>{
    gridRows[1][3] = 1
    gridRows[1][4] = 1
    gridRows[1][5] = 1
    gridRows[1][9] = 1
    gridRows[1][10] = 1
    gridRows[1][11] = 1
    gridRows[3][6] = 1
    gridRows[4][6] = 1
    gridRows[5][6] = 1
    gridRows[3][1] = 1
    gridRows[4][1] = 1
    gridRows[5][1] = 1
    gridRows[6][5] = 1
    gridRows[6][4] = 1
    gridRows[6][3] = 1
    gridRows[3][8] = 1
    gridRows[4][8] = 1
    gridRows[5][8] = 1
    gridRows[3][13] = 1
    gridRows[4][13] = 1
    gridRows[5][13] = 1
    gridRows[6][9] = 1
    gridRows[6][10] = 1
    gridRows[6][11] = 1
    gridRows[8][9] = 1
    gridRows[8][10] = 1
    gridRows[8][11] = 1
    gridRows[8][5] = 1
    gridRows[8][4] = 1
    gridRows[8][3] = 1
    gridRows[9][1] = 1
    gridRows[10][1] = 1
    gridRows[11][1] = 1
    gridRows[13][3] = 1
    gridRows[13][4] = 1
    gridRows[13][5] = 1
    gridRows[13][9] = 1
    gridRows[13][10] = 1
    gridRows[13][11] = 1
    gridRows[9][6] = 1
    gridRows[10][6] = 1
    gridRows[11][6] = 1
    gridRows[9][8] = 1
    gridRows[10][8] = 1
    gridRows[11][8] = 1
    gridRows[9][13] = 1
    gridRows[10][13] = 1
    gridRows[11][13] = 1
    return gridRows
}

export const handleMainBlinker = (grid) => {
    const newGrid = grid;
    newGrid[12][11] = 1
    newGrid[12][12] = 1
    newGrid[12][13] = 1
    return newGrid 
}

export const handleMainToad = (grid) => {
    const newGrid = grid;
    newGrid[12][11] = 1
    newGrid[12][12] = 1
    newGrid[12][13] = 1
    newGrid[11][12] = 1
    newGrid[11][13] = 1
    newGrid[11][14] = 1
    return newGrid 
}

export const handleMainGlider = (grid) => {
    const newGrid = grid;
    newGrid[4][4] = 1
    newGrid[4][6] = 1
    newGrid[5][5] = 1
    newGrid[5][6] = 1
    newGrid[6][5] = 1
    return newGrid 
}

export const handleMainPulsar = (grid) =>{
    const newGrid = grid
    newGrid[2][4] = 1
    newGrid[2][5] = 1
    newGrid[2][6] = 1
    newGrid[2][10] = 1
    newGrid[2][11] = 1
    newGrid[2][12] = 1
    newGrid[4][7] = 1
    newGrid[5][7] = 1
    newGrid[6][7] = 1
    newGrid[4][2] = 1
    newGrid[5][2] = 1
    newGrid[6][2] = 1
    newGrid[7][6] = 1
    newGrid[7][5] = 1
    newGrid[7][4] = 1
    newGrid[4][9] = 1
    newGrid[5][9] = 1
    newGrid[6][9] = 1
    newGrid[4][14] = 1
    newGrid[5][14] = 1
    newGrid[6][14] = 1
    newGrid[7][10] = 1
    newGrid[7][11] = 1
    newGrid[7][12] = 1
    newGrid[9][10] = 1
    newGrid[9][11] = 1
    newGrid[9][12] = 1
    newGrid[9][6] = 1
    newGrid[9][5] = 1
    newGrid[9][4] = 1
    newGrid[10][2] = 1
    newGrid[11][2] = 1
    newGrid[12][2] = 1
    newGrid[14][4] = 1
    newGrid[14][5] = 1
    newGrid[14][6] = 1
    newGrid[14][10] = 1
    newGrid[14][11] = 1
    newGrid[14][12] = 1
    newGrid[10][7] = 1
    newGrid[11][8] = 1
    newGrid[12][7] = 1
    newGrid[10][9] = 1
    newGrid[11][9] = 1
    newGrid[12][9] = 1
    newGrid[10][14] = 1
    newGrid[11][14] = 1
    newGrid[12][14] = 1
    return newGrid
}