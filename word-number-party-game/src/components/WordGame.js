import React, { useState, useEffect,useRef } from 'react'
import _ from 'underscore'
import Funcs from './functions'
import twoWords from '../db/FI2.json'
import threeWords from '../db/FI3.json'
import fourWords from '../db/FI4.json'
import fiveWords from '../db/FI5.json'
import sixWords from '../db/FI6.json'
import sevenWords from '../db/FI7.json'
import eightWords from '../db/FI8.json'

// TIME'S UP!

//  WORD FREQUENCIE https://sv.wikipedia.org/wiki/Bokstavsfrekvens // DUBLA FREKVENSEN
//Countdown: 3 vowels, 6 consonants; 4 vowels, 5 consonants; and 5 vowels, 4 consonants.
// Words score 1 point per letter, except for nine-letter words which are worth 18.

function WordGame() {

  const words2 = useRef({})
  const words3 = useRef([])
  const words4 = useRef([])
  const words5 = useRef([])
  const words6 = useRef([])
  const words7 = useRef([])
  const words8 = useRef([])

  const [letter1, setLetter1] = useState('?')
  const [letter2, setLetter2] = useState('?')
  const [letter3, setLetter3] = useState('?')
  const [letter4, setLetter4] = useState('?')
  const [letter5, setLetter5] = useState('?')
  const [letter6, setLetter6] = useState('?')
  const [letter7, setLetter7] = useState('?')
  const [letter8, setLetter8] = useState('?')

  const [answers2, setAnswers2] = useState([])
  const [answers3, setAnswers3] = useState([])
  const [answers4, setAnswers4] = useState([])
  const [answers5, setAnswers5] = useState([])
  const [answers6, setAnswers6] = useState([])
  const [answers7, setAnswers7] = useState([])
  const [answers8, setAnswers8] = useState([])


  // Loads in all the word json files
  useEffect(() => {
    words2.current = Funcs.loadInWordsAsKeyValueList(twoWords)
    words3.current = Funcs.loadInWordsAsKeyValueList(threeWords)
    words4.current = Funcs.loadInWordsAsKeyValueList(fourWords)
    words5.current = Funcs.loadInWordsAsKeyValueList(fiveWords)
    words6.current = Funcs.loadInWordsAsKeyValueList(sixWords)
    words7.current = Funcs.loadInWordsAsKeyValueList(sevenWords)
    words8.current = Funcs.loadInWordsAsKeyValueList(eightWords)
  }, [])

  const compareWords = (letters, word) => {
    let letterObj = Funcs.wordToLetterObject(letters)
    let wordObj =  Funcs.wordToLetterObject(word)
    //console.log(letterObj)
    //console.log(wordObj)
    const keys = Object.keys(wordObj)
    for (const i in keys){
      if(!(letterObj[keys[i]] >= wordObj[keys[i]]))
        return false
        
      //console.log(keys[i] + " -> "+letterObj[keys[i]])
      //console.log(wordObj[keys[i]] )
      //console.log(letterObj[keys[i]] >= wordObj[keys[i]])
    }
    return true
  }

  const compareWordLists = (letters, list) => {
    let words = []
    for (const key of Object.keys(list)){
      for(const word in list[key]){
        const comparisonLetters = list[key][word].split('').sort()
        if(_.difference(comparisonLetters,letters.sort()).length === 0){
          
          if(compareWords(letters,list[key][word]))
            //console.log(list[key][word])
            words = words.concat(list[key][word])
        }
      }
    }
    return words
  }

  const searchAnswers = () => {
    const currentLetters = [letter1, letter2, letter3, letter4, letter5, letter6, letter7, letter8]
    setAnswers2(compareWordLists(currentLetters,words2.current))
    setAnswers3(compareWordLists(currentLetters,words3.current))
    setAnswers4(compareWordLists(currentLetters,words4.current))
    setAnswers5(compareWordLists(currentLetters,words5.current))
    setAnswers6(compareWordLists(currentLetters,words6.current))
    setAnswers7(compareWordLists(currentLetters,words7.current))
    setAnswers8(compareWordLists(currentLetters,words8.current))
  }
  const assignLetters = (letter) => {
    if(letter1 === "?") setLetter1(letter)
    else if(letter2 === "?")setLetter2(letter)
    else if(letter3 === "?")setLetter3(letter)
    else if(letter4 === "?")setLetter4(letter)
    else if(letter5 === "?")setLetter5(letter)
    else if(letter6 === "?")setLetter6(letter)
    else if(letter7 === "?")setLetter7(letter)
    else if(letter8 === "?")setLetter8(letter)
  }

  const getConsonant = () =>{
    //console.log( Funcs.getConsonant())
    assignLetters(Funcs.getConsonant())
  }

  const getVowel = () =>{
    //console.log( Funcs.getConsonant())
    assignLetters(Funcs.getVowel())
  }

  const reset = () => {
    setAnswers2([])
    setAnswers3([])
    setAnswers4([])
    setAnswers5([])
    setAnswers6([])
    setAnswers7([])
    setAnswers8([])
    setLetter1("?")
    setLetter2("?")
    setLetter3("?")
    setLetter4("?")
    setLetter5("?")
    setLetter6("?")
    setLetter7("?")
    setLetter8("?")
  }


  const contentContainer = {width: "100%", textAlign: "center"}
  const headerStyle = {fontSize: "130px", margin: "0px"}

  const letterStyle = { width: "150px", height: "150px", margin: "10px",  borderStyle: "solid", borderWidth: "5px", borderColor: "#1b1b1b",  fontSize: "130px", textTransform: "uppercase", position: "relative", tranform: "translatey(-50%)"  }
  const flexStyle = {display: "flex", flexWrap: "nowrap", justifyContent: "center"}

  const answerStyle = {width: "350px", margin: "10px",  borderStyle: "solid", borderWidth: "5px", borderColor: "#1b1b1b", borderRadius: "25px",  fontSize: "30px", textTransform: "uppercase", position: "relative", tranform: "translatey(-50%)"  }
  const answerFlexStyle = {marginLeft: "5%", marginRight: "5%", display: "flex", justifyContent: "space-between", flexWrap: "nowrap"}
  const answerText = {textAlign: "center", padding: "0px", fontSize: "25px", marginTop: "10px"}
  const answerHeaderStyle = {marginTop: "2%", marginBottom: "0px", fontSize: "30px", margin: "5px", textDecoration: "underline"}
  

  const listAnswers = (list) => {
    const items = list.sort().map(ans => 
      <ul style={answerText} key={ans}>{ans}</ul>  
    );
    return items
  }

  return (
    <div style={contentContainer}>      

      <h1 style={headerStyle}>WORD GAME</h1>
    
      <button className="button" onClick={() =>getConsonant()}>
        CONSONANT
      </button>
      <button className="button" onClick={() =>getVowel()}>
        VOWEL
      </button>
      <button className="button" onClick={() =>searchAnswers()}>
        SHOW ANSWERS
      </button>
      <button className="button" onClick={() =>reset()}>
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


      <h2 style={{marginTop: "2%", marginBottom: "0px", fontSize: "60px"}}>Answers</h2>
      <div style={answerFlexStyle}>
        <div style={answerStyle}>
          <h3 style={answerHeaderStyle}>8 Letters</h3>
          {listAnswers(answers8)}
        </div>
        <div style={answerStyle}>
          <h3 style={answerHeaderStyle}>7 Letters</h3>
          {listAnswers(answers7)}
        </div>
        <div style={answerStyle}>
          <h3 style={answerHeaderStyle}>6 Letters</h3>
          {listAnswers(answers6)}
        </div>
        <div style={answerStyle}>
          <h3 style={answerHeaderStyle}>5 Letters</h3>
          {listAnswers(answers5)}
        </div>
        <div style={answerStyle}>
          <h3 style={answerHeaderStyle}>4 Letters</h3>
          {listAnswers(answers4)}
        </div>
        <div style={answerStyle}>
          <h3 style={answerHeaderStyle}>3 Letters</h3>
          {listAnswers(answers3)}
        </div>
        <div style={answerStyle}>
          <h3 style={answerHeaderStyle}>2 Letters</h3>
          {listAnswers(answers2)}
        </div>

      </div>

      <div>
        {listAnswers}
      </div>

    </div>
  )
}


export default WordGame