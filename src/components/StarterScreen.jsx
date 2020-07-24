import React from 'react';

const StarterScreen = ({ startPlaying }) => {
    return <div className='starterScreen-container'>
        <h1>JS Quizz</h1>
        <button className='start-quizz' onClick={startPlaying}>Click to start</button>
    </div>
}

export default StarterScreen;