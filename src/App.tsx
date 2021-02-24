import React from 'react';
import horse from './assets/horse.jpeg';
import { RotatingWords } from "./components/RotatingWords"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ paddingBottom: 100 }}>
          Ciao sono <RotatingWords/>, e questo è il mio <RotatingWords reverse={true}/>
        </div>
        <img src={horse} className="App-logo" alt="logo"/>
      </header>
    </div>
  )
}

export default App;
