//  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣦⣴⣶⣾⣿⣶⣶⣶⣶⣦⣤⣄⠀⠀⠀⠀⠀⠀⠀                                              
//  ⠀⠀⠀⠀⠀⠀⠀⢠⡶⠻⠛⠟⠋⠉⠀⠈⠤⠴⠶⠶⢾⣿⣿⣿⣷⣦⠄⠀⠀⠀          𓐓  MyComponent.js 𓐔           
//  ⠀⠀⠀⠀⠀⢀⠔⠋⠀⠀⠤⠒⠒⢲⠀⠀⠀⢀⣠⣤⣤⣬⣽⣿⣿⣿⣷⣄⠀⠀                                              
//  ⠀⠀⠀⣀⣎⢤⣶⣾⠅⠀⠀⢀⡤⠏⠀⠀⠀⠠⣄⣈⡙⠻⢿⣿⣿⣿⣿⣿⣦⠀  Student: oezzaou <oussama.ezzaou@gmail.com> 
//  ⢀⠔⠉⠀⠊⠿⠿⣿⠂⠠⠢⣤⠤⣤⣼⣿⣶⣶⣤⣝⣻⣷⣦⣍⡻⣿⣿⣿⣿⡀                                              
//  ⢾⣾⣆⣤⣤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠉⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇                                              
//  ⠀⠈⢋⢹⠋⠉⠙⢦⠀⠀⠀⠀⠀⠀⢀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇       Created: 2025/02/01 10:28:03 by oezzaou
//  ⠀⠀⠀⠑⠀⠀⠀⠈⡇⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇       Updated: 2025/02/01 13:20:28 by oezzaou
//  ⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⢀⣾⣿⣿⠿⠟⠛⠋⠛⢿⣿⣿⠻⣿⣿⣿⣿⡿⠀                                              
//  ⠀⠀⠀⠀⠀⠀⠀⢀⠇⠀⢠⣿⣟⣭⣤⣶⣦⣄⡀⠀⠀⠈⠻⠀⠘⣿⣿⣿⠇⠀                                              
//  ⠀⠀⠀⠀⠀⠱⠤⠊⠀⢀⣿⡿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠘⣿⠏⠀⠀                             𓆩♕𓆪      
//  ⠀⠀⠀⠀⠀⡄⠀⠀⠀⠘⢧⡀⠀⠀⠸⣿⣿⣿⠟⠀⠀⠀⠀⠀⠀⠐⠋⠀⠀⠀                     𓄂 oussama ezzaou𓆃  
//  ⠀⠀⠀⠀⠀⠘⠄⣀⡀⠸⠓⠀⠀⠀⠠⠟⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀                                              

import { useState, useEffect } from "react";
import React from 'react';

function MyComponent() {
  //===<[ useState: ]>=========================================================
  // Case: 1
  // const [counter, setCounter] = useState(0);
  //
  // function increment(){
  //   setCounter(value => value + 1);
  // }
  //
  // function dicrement(){
  //   setCounter(value => value - 1);
  // }
  //
  // return (
  //   <>
  //     <p> value: {counter} </p>
  //     <button onClick={()=> increment()} > increment </button>
  //     <button onClick={()=> dicrement()} > increment </button>
  //   </>
  // );

  // Case: 2
  // const [text, setText] = useState("");
  //
  // function handleChange(e) {
  //   setText(value => e.target.value);
  // }
  //
  // return (
  //   <>
  //     <input onChange={(e)=> handleChange(e)} />
  //     <p> You typed: {text} </p>
  //   </>
  // );

  // Case: 3
  // const [ like, setLike ] = useState(true)
  //
  // function checkHandler(e) {
  //   setLike((value) => e.target.checked);
  // }
  //
  // return (
  //   <>
  //     <input
  //       type="checkbox"
  //       checked={like}
  //       onChange={ (e) => checkHandler(e) }
  //     />
  //     <p> { (like === true) ? "checked" : "not checked"} </p>
  //   </>
  // );

  //==<[useEffect: ]>==========================================================
  //Case: 1
  // const [counter, setCounter] = useState(0);
  //
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCounter(value => value + 1);
  //     console.log("counter: " + counter);
  //   }, 1000)
  //   return () => clearInterval(intervalId);
  // });
  // return (
  //   <>
  //     <h1> counter: {counter} </h1>
  //   </>
  // );
  
  // Case: 2
  // const [windowWidth, setWinWidth] = useState(window.innerWidth);
  //
  // useEffect(() => {
  //   window.addEventListener('resize', () => {
  //     setWinWidth(window.innerWidth);
  //   });
  // }, [])
  //
  // return (
  //   <>
  //     <h1> Window width is {windowWidth}px </h1>
  //   </>
  // );
  // // NOTE: We track & save the new value of widowWidth

  // Case: 3
  // const [ type, setType ] = useState("Home"); 
  //
  // useEffect(() => {
  //   alert("resouce changed: " + type);
  // }, [type]);
  //
  // return (
  //   <>
  //     <button onClick={() => setType("Post")} > Post </button>
  //     <button onClick={() => setType("User")} > User </button>
  //     <p> type: {type} </p>
  //   </>

  //===<[ useContext: ]>=======================================================

  );
}

export default MyComponent;
