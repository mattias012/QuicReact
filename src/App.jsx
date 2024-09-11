import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './components/Welcome'
import Game from './components/Game'
import Result from './components/Result'

function App() {

  const WELCOME = 'welcome', GAME = 'game', RESULT = 'result';
  const [currentScreen, setCurrentScreen] = useState(WELCOME);
  const [score, setScore] = useState(0);

  let content = null;

  switch(currentScreen) {
    case WELCOME : 
      
      content = <Welcome nextScreen={() => setCurrentScreen(GAME)} />;
      break;

    case GAME :

      content = <Game showResult={() => setCurrentScreen(RESULT)} answeredCorrectly={() => setScore(score + 1) } getScore={score}/>;
      break;

    case RESULT :
      content = <Result score={score} />
      break;

      default : 
      content = <Welcome />
  }

  return (
    <>
      {content}
    </>
  )
}

export default App;