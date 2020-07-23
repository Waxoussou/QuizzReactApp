import React from 'react';

const Result = ({ score, total, startOver }) => {

    return <div className='result'>
        <p>Game Over</p>
        <p>score : <span>{Math.floor(score / total * 100)}%</span></p>
        <div className='restart-container'>
            <p>Think you can do better this time ?</p>
            <button onClick={startOver} className='restart-btn'>Play again?</button>
        </div>
    </div >
}

export default Result;