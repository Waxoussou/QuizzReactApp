import React from 'react';

const Answer = ({ value, answer, handleSelection, selection }) => {

    return <>
        <button name='answer'
            id={value} value={value}
            onClick={handleSelection}
            className={`answer-btn ${selection === value ? 'selected' : null}`}
        >{answer} </button>
        {/* <label htmlFor={value}>{answer}</label> */}
    </>
}

export default Answer;