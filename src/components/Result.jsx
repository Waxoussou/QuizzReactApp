import React from 'react';

const Result = ({ score, total, startOver }) => {

    return <div className='result'>
        <p>Game Over</p>
        <p>score : <span>{Math.floor(score / total * 100)}%</span></p>
        <button onClick={startOver}>restart</button>
    </div >
}

export default Result;