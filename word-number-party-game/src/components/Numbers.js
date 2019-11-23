import React, { useState } from 'react'

// TIME'S UP!

//  WORD FREQUENCIE https://sv.wikipedia.org/wiki/Bokstavsfrekvens // DUBLA FREKVENSEN
//Countdown: 3 vowels, 6 consonants; 4 vowels, 5 consonants; and 5 vowels, 4 consonants.
// Words score 1 point per letter, except for nine-letter words which are worth 18.

function Numbers() {

    const [number1, setNumber1] = useState('?')
    const [number2, setNumber2] = useState('?')
    const [number3, setNumber3] = useState('?')
    const [number4, setNumber4] = useState('?')
    const [number5, setNumber5] = useState('?')
    const [number6, setNumber6] = useState('?')

    const [smallNumbers, setSmallNumbers] = useState([1 , 1 , 2 , 2 , 3 , 3 , 4 , 4 , 5 , 5 , 6 , 6 , 7 , 7 , 8 , 8 , 9 , 9 , 10 , 10])
    const [bigNumbers, setBigNumbers] = useState([25,50,75,100])

    const [target, setTarget] = useState('?')
    const [solution, setSolution] = useState([])
    
    const [visible, setVisible] = useState(true)
    const toggleVisibility = () => {
      setVisible(!visible)
    }


    const reset = () => {
        setSmallNumbers([1 , 1 , 2 , 2 , 3 , 3 , 4 , 4 , 5 , 5 , 6 , 6 , 7 , 7 , 8 , 8 , 9 , 9 , 10 , 10])
        setBigNumbers([25,50,75,100])
        setNumber1("?")
        setNumber2("?")
        setNumber3("?")
        setNumber4("?")
        setNumber5("?")
        setNumber6("?")
        setTarget("?")
        setSolution([])
        setVisible(true)
    }

    const assignNumber = (number) => {
        if(number1 === "?") setNumber1(number)
        else if(number2 === "?")setNumber2(number)
        else if(number3 === "?")setNumber3(number)
        else if(number4 === "?")setNumber4(number)
        else if(number5 === "?")setNumber5(number)
        else if(number6 === "?")setNumber6(number)
    }

    const bigNumber = () => {
        if(!bigNumbers.length < 1){
            const n = Math.floor(Math.random() * bigNumbers.length)
            assignNumber(bigNumbers[n])
        
            bigNumbers.splice(n,1)
        }
    }

    const smallNumber = () => {
        if(!smallNumbers.length < 1){
            const n = Math.floor(Math.random() * smallNumbers.length)
            assignNumber(smallNumbers[n])
        
            smallNumbers.splice(n,1)
        }
    }



    const getTarget = () => {
        const referenceNums = [number1, number2, number3, number4, number5, number6]
        let previous = 0
        let steps = []

        while (true){
          const numbers = [number1, number2, number3, number4, number5, number6]
          const n = Math.floor(Math.random() * 4) + 3

          let targetIsValid = true
          let targetIsNotInNumbers = true

          previous = 0
          steps = []

          let m = Math.floor(Math.random() * numbers.length)
          const a = numbers[m]
          numbers.splice(m,1)
          previous = a

          for(let i = 0; i < n; i++){
              m = Math.floor(Math.random() * numbers.length)
              const b = numbers[m]
              numbers.splice(m,1)
              const nr = Math.floor(Math.random() * 4)

              switch(nr){
                  case 0:
                      steps = steps.concat(previous + " + " + b + " = " + Number(previous + b) )
                      previous = previous + b
                      break;
                  case 1:                      
                      steps = steps.concat(previous + " - " + b + " = " +  Number(previous - b) )
                      previous = previous - b
                      break;
                  case 2:              
                      steps = steps.concat(previous + " * " + b + " = " + previous * b )
                      previous = previous * b
                      break;
                  case 3:                      
                      steps = steps.concat(previous + " / " + b + " = " + previous / b )
                      previous = previous / b
                      break;
                  default:
                    previous = -1
                    break;
              }

              if(previous % 1 !== 0 ||  previous < 1 || previous > 999){
                targetIsValid = false
              }

              referenceNums.forEach(element => {
                if(element === previous){
                  targetIsNotInNumbers = false
                }
              });
          }
          if(previous % 1 === 0 &&  previous > 0 && targetIsValid && targetIsNotInNumbers){
            break;
          }
        }
        setTarget(previous)
        setSolution(steps)
    }

  const listSolution = () => {
    const len = solution.length
    const items = solution.map((sol, i) => {
      if(len - 1 === i){
        return <p style={solutionText} key={sol}>{sol}</p>  
      }else{
        return <p style={solutionText} key={sol}>{sol} &nbsp;&nbsp; --> &nbsp;&nbsp; </p>   
      }      
    });
    return items
  }

  const contentContainer = {width: "100%", textAlign: "center"}
  const headerStyle = {fontSize: "130px", margin: "0px"}
  const numberStyle = { width: "250px", height: "150px", margin: "10px",  borderStyle: "solid", borderWidth: "5px", borderColor: "#1b1b1b",  fontSize: "130px", textTransform: "uppercase", position: "relative", tranform: "translateY(-50%)"  }
  const flexStyle = {display: "flex", flexWrap: "nowrap", justifyContent: "center"}
  const solutionText = {textAlign: "center", padding: "0px", fontSize: "25px", marginTop: "10px"}
  const hideWhenVisible  = { display: visible ? 'none' : "flex", flexWrap: "nowrap", justifyContent: "center" }

  return (
    <div style={contentContainer}>      

      <h1 style={headerStyle} >NUMBERS</h1>

      <button className="button" onClick={() => smallNumber()} disabled={number6 !== "?" }>
        SMALL
      </button>
      <button className="button" onClick={() => bigNumber()} disabled={bigNumbers.length < 1 || number6 !== "?"}>
        BIG
      </button>
      <button className="button" onClick={getTarget} disabled={number6 === "?" }>
        GET TARGET 
      </button>
      <button className="button" onClick={toggleVisibility}>
        SHOW ANSWERS
      </button>
      <button className="button" onClick={reset}>
        RESET
      </button>

      <div style={flexStyle}>

        <div style={numberStyle}>
          {number1}
        </div>
        <div style={numberStyle}>
          {number2}
        </div>
        <div style={numberStyle}>
          {number3}
        </div>
        <div style={numberStyle}>
          {number4}
        </div>
        <div style={numberStyle}>
          {number5}
        </div>
        <div style={numberStyle}>
          {number6}
        </div>

      </div>

      <h2 style={{marginTop: "0px", marginBottom: "0px", fontSize: "60px"}}>Target</h2>
      <div style={flexStyle}>
        <div style={numberStyle}>
          {target}
        </div>
      </div>

      <h2 style={{marginTop: "0px", marginBottom: "0px", fontSize: "60px"}}>Solution</h2>
      <div style={hideWhenVisible}>
        {listSolution()}
      </div>

    </div>
  )
}


export default Numbers