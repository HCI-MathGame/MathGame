import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import textBubble from '../img/text-bubble.png'
import image1 from '../img/1.png'
import image2 from '../img/2.png'
import image3 from '../img/3.png'
import image4 from '../img/4.png'
import image5 from '../img/5.png'
import image6 from '../img/6.png'
import image7 from '../img/7.png'
import image8 from '../img/8.png'
import image9 from '../img/9.png'
import image10 from '../img/10.png'
import image11 from '../img/11.png'
import image12 from '../img/12.png'
import image13 from '../img/13.png'
import image14 from '../img/14.png'
import './styles/image.css'


const imagesList = [
    {
        id: 1,
        src: image1,
        alt: "Image 1",
    },
    {
        id: 2,
        src: image2,
        alt: "Image 2",
    },
    {
        id: 3,
        src: image3,
        alt: "Image 3",
    },
    {
        id: 4,
        src: image4,
        alt: "Image 4",
    },
    {
        id: 5,
        src: image5,
        alt: "Image 5",
    },
    {
        id: 6,
        src: image6,
        alt: "Image 6",
    },
    {
        id: 7,
        src: image7,
        alt: "Image 7",
    },
    {
        id: 8,
        src: image8,
        alt: "Image 8",
    },
    {
        id: 9,
        src: image9,
        alt: "Image 9",
    },
    {
        id: 10,
        src: image10,
        alt: "Image 10",
    },
    {
        id: 11,
        src: image11,
        alt: "Image 11",
    },
    {
        id: 12,
        src: image12,
        alt: "Image 12",
    },
    {
        id: 13,
        src: image13,
        alt: "Image 13",
    },
    {
        id: 14,
        src: image14,
        alt: "Image 14",
    },
];

function schimbaImagineDeFundal() {
   // const container = document.getElementById('background-container');
    const randomIndex = Math.floor(Math.random() * imagesList.length);
    const randomImage = imagesList[randomIndex];
    console.log(randomImage)
    document.getElementById('randomImage').src = randomImage.src;
  
    //container.style.backgroundImage = url('${randomImage}');
  }

function Level() {
    const { level } = useParams();
    const levelNumber = parseInt(level);

    const [randomImage, setRandomImage] = useState('');

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

    // const selectRandomImage = () => {
    //     const imageNumber = Math.floor(Math.random() * 14) + 1; // 1 to 14
    //     setRandomImage('../img/1.png'); // Assuming your images are named as '1.png', '2.png', ..., '14.png' and stored in the 'img' folder
    // };

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
                    schimbaImagineDeFundal();
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
        // debugger;
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
                        
                                {/* <img src={randomImage} alt="Random Disney Character" style={{ position: 'absolute', bottom: '20px', right: '20px' }} />
                                <img src="../img/text-bubble.png" alt="Text Bubble" style={{ position: 'absolute', bottom: '100px', right: '50px' }} /> */}
                            <div>
                                {imagesList.map((image) => (
                                    <img id='randomImage' key={image.id} src={image.src} alt={image.alt} className='image-background' />
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