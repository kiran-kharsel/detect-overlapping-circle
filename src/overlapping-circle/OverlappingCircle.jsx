import React, { useEffect, useState } from 'react'
import './style.css'

function OverlappingCircle() {
    // const [x, setX] = useState(0)
    // const [y, setY] = useState(0)

    const [circles, setCircles] = useState([])

    useEffect(() => {
        document.addEventListener('click', handleDocumentClick)

        return () => {
            document.removeEventListener('click', handleDocumentClick)
        }
    }, []);

    //random color
    function getRandomColor() {
        return "#" + Math.floor(Math.random() * 16777215).toString(16);
    }



    function handleDocumentClick(event) {
        const x = event.clientX
        const y = event.clientY
        const newCircle = { x, y }

        setCircles((prev) => {
            const oldCircles = [...prev]

            const newColor = getRandomColor()

            //check overlap
            oldCircles.forEach((circle) => {
                const x1 = circle.x
                const y1 = circle.y

                const x2 = newCircle.x
                const y2 = newCircle.y

                const xDiff = x2-x1;
                const yDiff = y2-y1;

                const distance = Math.sqrt(Math.pow(xDiff,2) + Math.pow(yDiff,2))

                const RADIUS_SUM = 100; 

                if(distance < RADIUS_SUM){
                    newCircle.color = newColor;
                    circle.color = newColor;
                }
            })
            oldCircles.push(newCircle)

            return oldCircles;
        })
    };



    return (
        <div className='overlapping-circle'>
            {circles.map((circle, index) => {
                return (
                    <Circle 
                    key={index} 
                    x={circle.x} 
                    y={circle.y} 
                    color={circle.color}/>
                )
            })}
        </div>
    )
}

export default OverlappingCircle


// circle component
function Circle({ x, y, color }) {
    return (
        <div
            style={{
                left: `${x}px`,
                top: `${y}px`,
                transform: `translate(-50%, -50%)`,
                backgroundColor: color ?? 'tomato',
            }}
            className='circle'></div>
    )
}