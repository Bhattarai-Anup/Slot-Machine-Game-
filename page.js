'use client'
import { Button } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'

const Lottery = () => {
    const lotteryOptions = ['💥','🍒', '💥', '🍋', '💥', '💥','🍌', '💥', '💥']

    const [randomNum1, setRandomNum1] = useState(null)
    const [randomNum2, setRandomNum2] = useState(null)
    const [randomNum3, setRandomNum3] = useState(null)
    const [isPaused, setIsPaused] = useState(false)

    useEffect(() => {
        if (!isPaused) {
            const interval = setTimeout(() => {
                const tempNum1 = Math.floor(Math.random() * lotteryOptions.length)
                const tempNum2 = Math.floor(Math.random() * lotteryOptions.length)
                const tempNum3 = Math.floor(Math.random() * lotteryOptions.length)

                setRandomNum1(tempNum1)
                setRandomNum2(tempNum2)
                setRandomNum3(tempNum3)
            }, 50)
            return () => clearTimeout(interval)
        }
    }, [randomNum1, randomNum2, randomNum3, isPaused])

    const hasWon = lotteryOptions[randomNum1] === lotteryOptions[randomNum2] && lotteryOptions[randomNum2] === lotteryOptions[randomNum3]

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <div style={{ fontSize: '2rem', marginBottom: '20px', color: hasWon ? '#2ecc71' : '#e74c3c' }}>
                {hasWon ? 'Congrats you won!' : 'You lost'}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                {[randomNum1, randomNum2, randomNum3].map((randomNum, columnIndex) => (
                    <div key={columnIndex} style={{ margin: '0 10px' }}>
                        {lotteryOptions.map((item, id) => (
                            <div key={id} style={{ 
                                width: '60px', 
                                height: '60px', 
                                display: 'flex', 
                                justifyContent: 'center', 
                                alignItems: 'center', 
                                backgroundColor: id === randomNum ? 'red' : '#34495e', 
                                color: 'white', 
                                fontSize: '2rem', 
                                borderRadius: '5px', 
                                margin: '5px 0',
                                transition: 'background-color 0.3s' 
                            }}>
                                {item}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <Button onClick={() => setIsPaused(!isPaused)} style={{ 
                backgroundColor: '#3498db', 
                color: 'white', 
                border: 'none', 
                padding: '10px 20px', 
                borderRadius: '5px', 
                cursor: 'pointer',
                transition: 'background-color 0.3s',
                display: 'block',
                margin: '0 auto'
            }}>
                {isPaused ? 'Resume' : 'Pause'}
            </Button>
        </div>
    )
}

export default Lottery
