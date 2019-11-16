import React, { useState, useEffect,useRef } from 'react'
import eightWords from '../db/FI8.json'

// TIME'S UP!

//  WORD FREQUENCIE https://sv.wikipedia.org/wiki/Bokstavsfrekvens // DUBLA FREKVENSEN
//Countdown: 3 vowels, 6 consonants; 4 vowels, 5 consonants; and 5 vowels, 4 consonants.
// Words score 1 point per letter, except for nine-letter words which are worth 18.

function Conundrum() {

  const [letter1, setLetter1] = useState('?')
  const [letter2, setLetter2] = useState('?')
  const [letter3, setLetter3] = useState('?')
  const [letter4, setLetter4] = useState('?')
  const [letter5, setLetter5] = useState('?')
  const [letter6, setLetter6] = useState('?')
  const [letter7, setLetter7] = useState('?')
  const [letter8, setLetter8] = useState('?')

  const [answer, setAnswer] = useState('')

  let words = useRef([])

  const [visible, setVisible] = useState(false)
  const hideWhenVisible = { display: visible ? '' : 'none' }
  const toggleVisibility = () => {
    setVisible(!visible)
  }

  useEffect(() => {
    let temp = []
    for (const key in eightWords){
      temp = temp.concat(eightWords[key])
      //words = words.concat(eightWords[key])
      //console.log(typeof words)
    }
    words.current = temp
    console.log(words)
  }, [])

  const resetWords = () => {
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

  const getWord = () => {
    setVisible(false)
    console.log(words.current.length)
    const number = Math.floor(Math.random() * words.current.length )
    console.log(number)
    console.log(words.current[number])
    const word = words.current[number].split('');
    console.log(word)
    const n = word.length;

    for(let i = n - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let tmp = word[i];
        word[i] = word[j];
        word[j] = tmp;
    }
    console.log(word)

    setLetters(words.current[number],word)
  }
  
  const setLetters = (ans,scramble) => {
    //console.log(ans)
    setAnswer(ans)
    setLetter1(scramble[0])
    setLetter2(scramble[1])
    setLetter3(scramble[2])
    setLetter4(scramble[3])
    setLetter5(scramble[4])
    setLetter6(scramble[5])
    setLetter7(scramble[6])
    setLetter8(scramble[7])
  }
  

  return (
    <div style={{margin: "auto",width: "50%",padding: "10px", fontSize: "150px", textAlign: "center"}}>      

      <button onClick={getWord}>
        GET WORD
      </button>

      <button onClick={resetWords}>
        RESET
      </button>

      <button onClick={toggleVisibility}>
        SHOW ANSWER
      </button>

      <br/>
      {letter1}
      {letter2}
      {letter3}
      {letter4}
      {letter5}
      {letter6}
      {letter7}
      {letter8}

      <br/>
      

      <div style={hideWhenVisible}>
        {answer}
      </div>
    </div>
  )
}


export default Conundrum