import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router';
import './App.scss';
import Cursor from './component/Cursor/Cursor';
import Homepage from './pages/Homepage/Homepage';
import Loader from './component/Loader/Loader';

function App() {
  const [loading, setLoding] = useState(true);
  const cursorRef = useRef()
  useEffect(() => {
    setTimeout(() => {
      setLoding(false);
    }, 3000);


  }, []);

  onmousemove = (e) => {
    // cursorRef.current.style.left = `${e.pageX}px`
    // cursorRef.current.style.top = `${e.pageY}px`
  }

  console.log(cursorRef)
  // onmousedown = (e) => {
  //   const cursor = document.querySelector(".cursor");
  //   cursor.style.border = "2px solid green"
  //   cursor.style.background = "red"

  // }
  // onmouseup = (e) => {
  //   const cursor = document.querySelector(".cursor");
  //   cursor.style.border = ""
  //   cursor.style.background = ""

  // }

  
  return (
    <div className=''
    onMouseMove={ () => onmousemove}
    >
      {/* <span ref={cursorRef}></span> */}
    <Cursor cursorRef={cursorRef}/>
      <Routes>
        <Route path="/"  element={loading ? <Loader/> : <Homepage/>}/>
      </Routes>
    </div>
  
  );
}

export default App;

