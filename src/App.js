import React, { useState, useEffect } from 'react';
import './App.css';
import Question from './components/Question';
import Result from './components/Result'
import StarterScreen from "./components/StarterScreen";
import Error from './components/Error';
import { questions } from './questions';

function App() {
  const [Qcount, setQcount] = useState(0);
  const [end, setEnd] = useState(false)
  const [selection, setSelection] = useState(null)
  const [game, setGame] = useState(false)
  const [error, setError] = useState('')

  const [state, setState] = useState({
    gameTimeStart: null,
    gameTimeEnd: null,
    answers: [],
    score: 0,
  })

  const startPlaying = () => {
    setState({
      ...state,
      gameTimeStart: new Date()
    })
    !game && setGame(true)
  }

  const handleSelection = (e) => {
    e.preventDefault()
    setSelection(e.target.value)
  }
  const handleError = (msg) => {
    setError(msg);
    setTimeout(() => {
      setError('')
    }, 1000)
  }
  const next = (e) => {
    e.preventDefault()
    if (!selection) return handleError('no answer selected');

    setState({
      ...state,
      answers: [...state.answers, {
        qid: Qcount + 1, answer: selection
      }],
      score: selection === questions[Qcount].expected_answer ? state.score + 1 : state.score,
      gameTimeEnd: Qcount + 1 < questions.length ? new Date() : null
    })

    setSelection(null)
    Qcount + 1 < questions.length ? setQcount(Qcount + 1) : setEnd(true)
  }

  const startOver = () => {
    setState({
      currentQuestion: 0,
      currentSelection: null,
      answers: [],
      score: 0,
    })
    setQcount(0)
    setEnd(false)
    console.log(state);
  }

  useEffect(() => {
    console.log(state)
  }, [state])

  return (
    <div className="App">
      {!game ?
        <StarterScreen startPlaying={startPlaying} /> :
        <>
          {!end ?
            <>
              <p className='progress'> Question  <span>{Qcount + 1}</span> / <span> {questions.length} </span></p>
              {error && <Error error={error} />}
              <Question
                question={questions[Qcount]}
                next={next}
                handleSelection={handleSelection}
                selection={selection} />

            </> :
            <Result startOver={startOver} score={state.score} total={questions.length} />
          }</>
      }
    </div >
  );
}

export default App;