import React from 'react';

const StarterScreen = ({ startPlaying }) => {
    return <>
        <h1>Start js Quizz</h1>
        <button className='start-quizz' onClick={startPlaying}>Start</button>
    </>
}

export default StarterScreen;