import React, { useState } from 'react';
import './Game.css'
import Board from './Board';
import { calculateWinner } from '../helper';

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXisNext] = useState(true)
    const winner = calculateWinner(board)

    const handleClick = (index) => {
        const boardCopy = [...board]
        //Determine if square is clicked or game is over
        if(winner || boardCopy[index]) return
        //Determine whose move X ? 0
        boardCopy[index] = xIsNext ? 'X' : 'O'
        //Update the state
        setBoard(boardCopy)   
        setXisNext(!xIsNext)

    }

    const startNewGame = () => {
        return (
            <button className='start__btn' onClick={() => setBoard(Array(9).fill(null))}>Restart</button>
        )
    }

    return (
        <div className='wrapper'>
            {startNewGame()}
            <Board squares = {board} click = {handleClick}/>
            <p className='game__info'>
                {winner ? 'Winner ' + winner : 'Turn of a ' + (xIsNext ? 'X' : 'O')}
            </p>
        </div>
    );
}

export default Game;
