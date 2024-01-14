import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function Level() {
    const { level } = useParams();
    const levelNumber = parseInt(level);

    const [isReady, setIsReady] = useState(false);
    const [score, setScore] = useState(0);
    const [operations, setOperations] = useState([]);
    const [currentOperation, setCurrentOperation] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null); // State to track the active element


    const handleDivClick = (index) => {
        setActiveIndex(index); // Set the active element
    };

    // Style for the non-active elements
    const defaultStyle = {
        border: '2px solid #7C3AED',
        borderRadius: '15px',
        backgroundColor: '#EDE9FE',
        margin: '10px',
        padding: '20px',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#5B21B6',
        boxShadow: '5px 5px 0px #A78BFA',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'transform 0.1s' // Smooth transition for the press effect
    };

    const activeStyle = {
        ...defaultStyle,
        backgroundColor: '#C7D2FE', // Change background color to indicate active state
        boxShadow: 'inset 5px 5px 10px #A78BFA', // Inner shadow to look pressed
        transform: 'scale(0.95)' // Slightly scale down to give a pressed look
    };

    useEffect(() => {
        if (isReady) {
            import(`../DataLevel${levelNumber}.js`)
                .then(module => {
                    setOperations(module.default);
                    const randomOperation = getRandomOperation(module.default);
                    setCurrentOperation(randomOperation);
                })
                .catch(err => {
                    console.error("Error loading the data file:", err);
                });
        }
    }, [isReady, levelNumber]);

    const handleReadyClick = () => {
        setIsReady(true);
    };

    const incrementScore = () => {
        setScore(score + 1);
        const randomOperation = getRandomOperation(operations);
        setCurrentOperation(randomOperation);
    };

    // Function to get a random operation, split it into parts, and filter out the division symbol
    const getRandomOperation = (ops) => {
        const operation = ops[Math.floor(Math.random() * ops.length)];
        // Split the operation into parts and filter out the division symbol
        var test = operation.split('/');
        debugger;
        return test;
    };

    const checkTheAnswer = () => {
        var win = currentOperation[5 + activeIndex] === currentOperation[8];
        if (win) {
            if (score > 9) {
                window.alert("Felicitari");
            }
            setScore(score + 1);
            setActiveIndex(null);
            const randomOperation = getRandomOperation(operations);
            setCurrentOperation(randomOperation);
        }
    }

    const cancelAnswer = () => {
        setActiveIndex(null);
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            {isReady ? (
                <>
                    <div>
                        <h2>Level {levelNumber}</h2>
                        <div style={{ right: '25px', top: '10px', position: 'absolute' }}>
                            <h2>Score: {score}</h2>
                        </div>
                        <div>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                gap: '10px',
                            }}>
                                {currentOperation.slice(0, -4).map((part, index) => (
                                    <div key={index} style={defaultStyle}>
                                        {part}
                                    </div>
                                ))}
                            </div>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                gap: '10px',
                            }}>
                                {currentOperation.slice(-4, -1).map((part, index) => {
                                    // Calculate the actual index of the element
                                    const actualIndex = index;
                                    return (
                                        <div
                                            key={`last-${index}`}
                                            style={actualIndex === activeIndex ? activeStyle : defaultStyle}
                                            onClick={() => handleDivClick(actualIndex)}
                                        >
                                            {part}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>


                        {/* New cartoonish buttons */}
                        <div style={{ display: 'block', textAlign: 'center', marginTop: "20px" }}>
                            <button
                                onClick={checkTheAnswer}
                                style={{
                                    backgroundColor: '#4CAF50', // Green color
                                    border: 'none',
                                    color: 'white',
                                    padding: '15px 32px',
                                    textAlign: 'center',
                                    textDecoration: 'none',
                                    display: 'inline-block',
                                    fontSize: '16px',
                                    borderRadius: '10px',
                                    boxShadow: '4px 4px 0px #2E7D32', // Shadow for the 3D effect
                                    cursor: 'pointer',
                                }}>
                                Verifica
                            </button>
                            <button
                                onClick={cancelAnswer}
                                style={{
                                    backgroundColor: '#F44336', // Red color
                                    border: 'none',
                                    color: 'white',
                                    padding: '15px 32px',
                                    textAlign: 'center',
                                    textDecoration: 'none',
                                    display: 'inline-block',
                                    fontSize: '16px',
                                    borderRadius: '10px',
                                    boxShadow: '4px 4px 0px #D32F2F', // Shadow for the 3D effect
                                    cursor: 'pointer',
                                }}>
                                Anuleaza raspunsul
                            </button>
                        </div>
                    </div>
                </>
            ) : (
                <div>
                    <h2>Are you ready?</h2>
                    <button onClick={handleReadyClick}>Yes</button>
                    <Link to="/">No</Link>
                </div>
            )}
        </div>
    );
}

export default Level;
