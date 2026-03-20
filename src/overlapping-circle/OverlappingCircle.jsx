import React, { useEffect, useState } from 'react'
import './style.css'

function OverlappingCircle() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    useEffect(()=>{
        document.addEventListener('click', handleDocumentClick)

        return ()=>{
            document.removeEventListener('click', handleDocumentClick)
        }
    },[]);


    function handleDocumentClick(event){
        const x = event.clientX
        const y = event.clientY

        setX(x)
        setY(y)
    };



  return (
    <div className='overlapping-circle'>
        {x && y && <Circle x={x} y={y}/>}
    </div>
  )
}

export default OverlappingCircle


// circle component
function Circle({x, y}){
    return (
        <div 
        style={{
            left: `${x}px`,
            top: `${y}px`
        }}
        className='circle'></div>
    )
}