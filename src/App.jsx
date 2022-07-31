import { useState } from 'react';
import './App.css';
import Header from './components/Header.jsx';

function App() {
  const [value, setValue] = useState('');
  const [randomNumber, SetRandomNumber] = useState('');
  const [isRight, setIsRight] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [success, setSuccess] = useState(0);
  const [wrong, setWrong] = useState(0);
  
  const handleInput = () => {
    setClickCount(clickCount + 1)
    const guessingNumber = Math.floor(Math.random() * 10);
    SetRandomNumber(guessingNumber);
    if (clickCount === 5) {
      setGameOver(true)
     
    } else {
      if (value == '' || value > 10) {
          alert('please add number between 0-9');
      } else {
        if (value == guessingNumber) {
          setIsRight(true)
          setIsWrong(false)
          setSuccess(success + 1)
          setValue(0)
        } else {
          setIsRight(false)
          setIsWrong(true)
          setWrong(wrong + 1)
          setValue(0)
        }
      }
      
    }
  }
  const reset = () => {
    console.log('reset');
    setValue(0);
    setClickCount(0)
    setIsRight(false)
    setSuccess(0)
    setWrong(0)
    setGameOver(false)
  }
  
  return (
    <div className="container">
      <Header />
      <div className="main">
        <div className="leftSide">
          <div className="panelText">
            <span className=""> 1. Guess a number between 0-9. </span>
          </div>
          <div className="panelText">
            <span className=""> 2. Maximum 5 Times. </span>
          </div>
          <div className="panelText">
            3. You have Pressed <span id="clicked"> {clickCount} </span> times.
          </div>
          <div>
            <input
              className="inputBox"
              type="number"
              placeholder="input number between 0-9"
              onChange={(e) => { setValue(e.target.value) }}
              value={value}
            />
            <button className="button" onClick={handleInput}>Put your number</button>
            
            {
              isRight ? <p className='greenBorder'> Your Answer is Right, Robot's number is also {randomNumber} </p> :
              <p className='redBorder'> Your Answer is Wrong, Right number is {randomNumber} </p>
            }
            
            {
              gameOver&& <button className='redBorder' onClick={reset}> Game is Over, Please reset </button> 
            }

            
          </div>
        </div>
        <div className="leftSide">
          <div className="subHeader">Score</div>

          <h2>
            Number of correct Gueesing
            <span id="correctGuesseCount" className="success"> { success} </span>
          </h2>
          <h2>
            Number of Wrong Gueesing
            <span id="wrongGuesseCount" className="danger"> { wrong} </span>
          </h2>
          <div className="" id="gameOver"></div>
          <button className="button" onClick={reset}>Reset</button>
        </div>
      </div>
      </div>
  )
}

export default App
