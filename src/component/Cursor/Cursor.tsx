import React from 'react'
import "./Cursor.scss";


type Props = {
    top : string,
    left : string
}

const Cursor = ({cursorRef} : any) => {
  return (
    <div className="cursor hidden sm:flex" ref={cursorRef}>
      
    </div>
  )
}

export default Cursor
