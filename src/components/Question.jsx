import React from 'react';
import Answer from './Answer';

const Question = ({ question, next, handleSelection, selection }) => {

    return <div className="quiz-container">
        <form onSubmit={next}>
            <h3>{question.question}</h3>
            {Object.keys(question.answers).map((answer, i) => {
                return <Answer
                    key={i}
                    value={answer}
                    answer={question.answers[answer]}
                    handleSelection={handleSelection}
                    selection={selection}
                />
            })}
            <input className='next-question' type="submit" value="next" onClick={next} />
        </form>
    </div>
}

export default Question;