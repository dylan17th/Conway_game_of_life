import React from "react";

const Rules = () => {
    return (
        <div className=".rules-components">
            <h1>Rules:</h1>
            <div>• Any live cell with fewer than two live neighbours dies, as if by underpopulation</div>
            <div>• Any live cell with two or three live neighbours lives on to the next generation</div>
            <div>• Any live cell with more than three live neighbours dies, as if by overpopulation</div>
            <div>• Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction</div>
        </div>
    )
}

export default Rules;