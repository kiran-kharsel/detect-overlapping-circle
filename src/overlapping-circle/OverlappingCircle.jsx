import React from 'react'
import './style.css'

function OverlappingCircle() {
  return (
    <div className='overlapping-circle'>
        <Circle/>
    </div>
  )
}

export default OverlappingCircle


// circle component
function Circle(){
    return (
        <div className='circle'></div>
    )
}