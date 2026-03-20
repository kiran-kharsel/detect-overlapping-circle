import React, { useEffect, useState } from 'react'
import './style.css'

function OverlappingCircle() {
    // const [x, setX] = useState(0)
    // const [y, setY] = useState(0)

    const [circles, setCircles] = useState([])

    useEffect(()=>{
        document.addEventListener('click', handleDocumentClick)

        return ()=>{
            document.removeEventListener('click', handleDocumentClick)
        }
    },[circles]);


    function handleDocumentClick(event){
        const x = event.clientX
        const y = event.clientY
        const newCircle = {x,y}

        setCircles((prev) => {
            const oldCircles = [...prev]
            oldCircles.push(newCircle)

            return oldCircles;
        })
    };



  return (
    <div className='overlapping-circle'>
        {circles.map((circle, index) => {
            return (
                <Circle key={index} x={circle.x} y={circle.y}/>
            )
        })}
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
            top: `${y}px`,
            transform: `translate(-50%, -50%)`
        }}
        className='circle'></div>
    )
}