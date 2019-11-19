import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Conundrum from './components/Conundrum'
import WordGame from './components/WordGame'
import './index.css'


// #1a237e blue highlight color
// #1b1b1b Selected color
// #424242 navbar color

// TIME'S UP!

//  WORD FREQUENCIE https://sv.wikipedia.org/wiki/Bokstavsfrekvens // DUBLA FREKVENSEN
//Countdown: 3 vowels, 6 consonants; 4 vowels, 5 consonants; and 5 vowels, 4 consonants.
// Words score 1 point per letter, except for nine-letter words which are worth 18.

function App() {

  // This is mostly styling for the navbar and the container
  const headerStyle = {textAlign: "center", color: "white", fontSize: "80px", padding: "0", margin: "2px"}

  const navbarStyle = {margin: "0", padding: "0", overflow: "hidden", backgroundColor:"#424242",  top:"0", width: "100%", display:"block"}

  const linkStyle = { padding: "14px 16px", display: "block", color: "white", textAlign: "center", textDecoration: "none" , borderRight: "1px solid #bbb"}

  const lastlinkStyle = { padding: "14px 16px", display: "block", color: "white", textAlign: "center", textDecoration: "none" , borderLeft: "1px solid #bbb"}

  const adjustNavbar = { float: "left"}

  return (
    <div>
      <Router>
        <div>
          <div style={navbarStyle}>

            <h2 style={headerStyle} id="resp-header-text">TIME'S UP!</h2>

            <div id="resp-links" style={ {borderTop: "2px solid #bbb"}} >

              <div style={adjustNavbar}>
                <NavLink exact activeClassName="selected" style={linkStyle} to="/">Word Game</NavLink >
              </div>

              <div style={adjustNavbar}>
                <NavLink  activeClassName="selected" style={linkStyle} to="/numbers">Numbers</NavLink >
              </div>

              <div style={adjustNavbar}>
                <NavLink  activeClassName="selected" style={linkStyle} to="/conundrum">Conundrum</NavLink >
              </div>

              <div style={adjustNavbar}>
                <NavLink activeClassName="selected" style={linkStyle} to="/rules">Rules</NavLink >
              </div>

              <div style={{float:"right"}}>
                <NavLink activeClassName="selected" style={lastlinkStyle} to="/about">About</NavLink >
              </div>

            </div>

          </div>
          <div style={{display: "block"}}>
            <Route exact path="/" render={() => <WordGame />} />
            <Route path="/numbers" render={() => <Conundrum />} />
            <Route path="/conundrum" render={() => <Conundrum />} />
            <Route path="/rules" render={() => <Conundrum />} />
            <Route path="/about" render={() => <Conundrum />} />
          </div>
        </div>
      </Router>
    </div>
  )
}


export default App