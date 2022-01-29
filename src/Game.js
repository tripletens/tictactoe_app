
import React, { useState } from 'react';
import {CalculateWinner} from './Helpers';
import Board from './Board';

const styles = {
    height:"200px",
    width:"20%",
    margin:"20px auto",
    border:'2px solid #EEE888',
}

const pstyle = {
    color:'#EEE888',
}

const btnstyle = {
    height:'100px',
    width:'150px',
    background: 'black',
    color:'#EEE888',
    fontSize: "20px"
}

const Game = () => {
    const [board, setboard] = useState(Array(9).fill(null));
    const [xisnext, setxisnext] = useState(true);
    const winner = CalculateWinner(board);

    const [isdraw, setisdraw] = useState(false);

    const handleClick = i => {
        const boardCopy = [...board];
        // if a user clicks on an occupied square or there is a winner then we do nothing 
        if(winner || boardCopy[i]) return;
        
        boardCopy[i] = xisnext ? 'X' : 'O';

        if(!winner) setisdraw(true);

        setboard(boardCopy);
        setxisnext(!xisnext);
    }

    const renderMoves = () => (
        <button style={btnstyle} onClick={()=> setboard(Array(9).fill(null))}>
           Restart Game
        </button>
    )

    return (
        <>
            <Board squares={board} onclick={handleClick} />
            <div style={styles}>
                <p style={pstyle}>{winner && (winner !='draw') ? "Winner: " + winner : ( winner && winner === 'draw' ? "Draw" : "Next Player: " + ( xisnext ? 'X' : 'O') )}</p>
                {renderMoves()}
            </div>
        </>
    );
}

export default Game;