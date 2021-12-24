import './index.css';
import './App.css';
import React,{useState ,useEffect} from 'react';
import Squarecomponents from './Squarecomponents.js';
const initialstate=["","","","","","","","","",""];
function App() {
  const [gamestate,updategamestate]= useState(initialstate);
  const [isxchance,updatexchance]= useState(false);
  const onsquareclicked=(index)=>{
      let strings=Array.from(gamestate);
      strings[index]=isxchance ? "x" : "0";
      updategamestate(strings);
      updatexchance(!isxchance);
  };
  useEffect(() => {
    let winner = checkWinner();
    if (winner) {
        alert(`${winner} won the Game !`);
        updategamestate(initialstate);
    }
}, [gamestate])

const checkWinner = () =>{
  const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
  ];
  console.log('Class: App, Function: checkWinner ==', gamestate[0], gamestate[1], gamestate[2]);
  for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (gamestate[a] && gamestate[a] === gamestate[b] && gamestate[a] === gamestate[c]) {
          return gamestate[a];
      }
  }
  return null;
}


  return (
    
    <>
    <div className="app-header">
      <p className="heading-text">React tic-tac</p>
        <div className="row jc-center">
          <Squarecomponents className="b-bottom-right" state={gamestate[0]} onClick={()=>onsquareclicked(0)} />
          <Squarecomponents className="b-bottom-right" state={gamestate[1]} onClick={()=>onsquareclicked(1)} />
          <Squarecomponents className="b-bottom" state={gamestate[2]} onClick={()=>onsquareclicked(2)} />
        </div>
        <div className="row jc-center">
        <Squarecomponents className="b-bottom-right" state={gamestate[3]} onClick={()=>onsquareclicked(3)} />
          <Squarecomponents className="b-bottom-right" state={gamestate[4]} onClick={()=>onsquareclicked(4)} />
          <Squarecomponents className="b-bottom" state={gamestate[5]} onClick={()=>onsquareclicked(5)} />
        </div>
        <div className="row jc-center">
        <Squarecomponents className="b-right" state={gamestate[6]} onClick={()=>onsquareclicked(6)} />
          <Squarecomponents className="b-right" state={gamestate[7]} onClick={()=>onsquareclicked(7)} />
          <Squarecomponents state={gamestate[8]} onClick={()=>onsquareclicked(8)} />
        </div>
        <button className="clear-button" onClick={()=>updategamestate(initialstate)} >Clear Button</button>
    </div>
    </>
  );
}

export default App;
