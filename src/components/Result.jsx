import React from 'react';

const formatTime = (time) => {
    const seconds = Math.floor(time / 1000);
    const minutes = Math.floor(time / (1000 * 60));
    const hours = Math.floor(time / (1000 * 60 * 60));
    return `${minutes}mn : ${seconds}s`
}

const Result = ({ score, total, startOver, time }) => {
    const duration = time.end - time.start;
    const time_passed = formatTime(duration)
    return <div className='result'>
        <div>
            <h1>Game Over</h1>
            <p>temp écoulé : <span>{time_passed}</span></p>
            <p>score : <span>{Math.floor(score / total * 100)}%</span></p>
        </div>
        <div className='restart-container'>
            <p>Think you can do better this time ?</p>
            <button onClick={startOver} className='restart-btn'>Play again?</button>
        </div>
    </div >
}

export default Result;