import React, { useState, useEffect,useRef } from 'react'
import Funcs from './functions'
import eightWords from '../db/FI8.json'

// TIME'S UP!

//  WORD FREQUENCIE https://sv.wikipedia.org/wiki/Bokstavsfrekvens // DUBLA FREKVENSEN
//Countdown: 3 vowels, 6 consonants; 4 vowels, 5 consonants; and 5 vowels, 4 consonants.
// Words score 1 point per letter, except for nine-letter words which are worth 18.

function Conundrum() {

  const words = useRef([])

  const [letter1, setLetter1] = useState('?')
  const [letter2, setLetter2] = useState('?')
  const [letter3, setLetter3] = useState('?')
  const [letter4, setLetter4] = useState('?')
  const [letter5, setLetter5] = useState('?')
  const [letter6, setLetter6] = useState('?')
  const [letter7, setLetter7] = useState('?')
  const [letter8, setLetter8] = useState('?')

  const [ansLetter1, setAnsLetter1] = useState('?') 
  const [ansLetter2, setAnsLetter2] = useState('?')
  const [ansLetter3, setAnsLetter3] = useState('?')
  const [ansLetter4, setAnsLetter4] = useState('?')
  const [ansLetter5, setAnsLetter5] = useState('?')
  const [ansLetter6, setAnsLetter6] = useState('?')
  const [ansLetter7, setAnsLetter7] = useState('?')
  const [ansLetter8, setAnsLetter8] = useState('?')

  const [answer, setAnswer] = useState('????????')

  const [showAnswer, setShowAnswer] = useState(false)

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer)
    showAnswer ? changeAnswer(answer) : changeAnswer(["?","?","?","?","?","?","?","?"])
  }

  // Loads in all the eight letter words on content load
  useEffect(() => {
    words.current = Funcs.loadInWords(eightWords)
  }, [])

  const getWord = () => {
    // Reset previous answer
    setShowAnswer(true)
    changeAnswer(["?","?","?","?","?","?","?","?"])

    // Caclulate out random word
    const number = Math.floor(Math.random() * words.current.length )
    const word = words.current[number].split('');
    const n = word.length;

    // Randomize letters
    for(let i = n - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let tmp = word[i];
        word[i] = word[j];
        word[j] = tmp;
    }
    // Set letters and save answer
    setLetters(words.current[number],word)
  }
  
  const setLetters = (ans,scrambled) => {
    setAnswer(ans)
    setLetter1(scrambled[0])
    setLetter2(scrambled[1])
    setLetter3(scrambled[2])
    setLetter4(scrambled[3])
    setLetter5(scrambled[4])
    setLetter6(scrambled[5])
    setLetter7(scrambled[6])
    setLetter8(scrambled[7])
  }

  const resetWords = () => {
    // Reset all letters and answer
    setShowAnswer(true)
    changeAnswer(["?","?","?","?","?","?","?","?"])
    setAnswer("????????")
    setLetter1("?")
    setLetter2("?")
    setLetter3("?")
    setLetter4("?")
    setLetter5("?")
    setLetter6("?")
    setLetter7("?")
    setLetter8("?")
  }

  const changeAnswer = (answer) => {
    // Update answer
    setAnsLetter1(answer[0])
    setAnsLetter2(answer[1])
    setAnsLetter3(answer[2])
    setAnsLetter4(answer[3])
    setAnsLetter5(answer[4])
    setAnsLetter6(answer[5])
    setAnsLetter7(answer[6])
    setAnsLetter8(answer[7])
  }
  
  // Mabye turn the elemnt into a map func

  const contentContainer = {width: "100%", textAlign: "center"}
  const headerStyle = {fontSize: "130px", margin: "0px"}
  const letterStyle = { width: "150px", height: "150px", margin: "10px",  borderStyle: "solid", borderWidth: "5px", borderColor: "#1b1b1b",  fontSize: "130px", textTransform: "uppercase", position: "relative", tranform: "translatey(-50%)"  }
  const flexStyle = {display: "flex", flexWrap: "nowrap", justifyContent: "center"}

  return (
    <div style={contentContainer}>      

      <h1 style={headerStyle} >CONUNDRUM</h1>

      <button className="button" onClick={getWord}>
        GET WORD
      </button>
      <button className="button" onClick={toggleAnswer}>
        SHOW ANSWER
      </button>
      <button className="button" onClick={resetWords}>
        RESET
      </button>

      <div style={flexStyle}>

        <div style={letterStyle}>
          {letter1}
        </div>
        <div style={letterStyle}>
          {letter2}
        </div>
        <div style={letterStyle}>
          {letter3}
        </div>
        <div style={letterStyle}>
          {letter4}
        </div>
        <div style={letterStyle}>
          {letter5}
        </div>
        <div style={letterStyle}>
          {letter6}
        </div>
        <div style={letterStyle}>
          {letter7}
        </div>
        <div style={letterStyle}>
          {letter8}
        </div>

      </div>

      <div style={flexStyle}>

        <div style={letterStyle}>
          {ansLetter1}
        </div>
        <div style={letterStyle}>
          {ansLetter2}
        </div>
        <div style={letterStyle}>
          {ansLetter3}
        </div>
        <div style={letterStyle}>
          {ansLetter4}
        </div>
        <div style={letterStyle}>
          {ansLetter5}
        </div>
        <div style={letterStyle}>
          {ansLetter6}
        </div>
        <div style={letterStyle}>
          {ansLetter7}
        </div>
        <div style={letterStyle}>
          {ansLetter8}
        </div>

      </div>

    </div>
  )
}


export default Conundrum