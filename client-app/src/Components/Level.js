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
import image from '../img/image.jpg';
import './styles/image.css';
import { useNavigate } from 'react-router-dom';


const funFactsList = [
    "   STIAI CA: \n 2 + 2 = 4,dar și 1 + 3 = 4. \n Exista multe modalitati\n diferite\n de a ajunge la\n aceeași suma",
    "   STIAI CA: \n Numerele pare sunt\n cele care \n se termina in 0, 2, 4, 6 sau 8.",
    "   STIAI CA: \n Numerele impare sunt\n cele care \n se termina in 1, 3, 5, 7 sau 9.",
    "   STIAI CA: \n Ceasul are douăsprezece ore, iar \n fiecare ora este ca o \n perioadă de joacă. \n Ora 12 este ca pranzul!",
    "   STIAI CA: \n Calendarul are 12 luni în total,\n iar fiecare \n lună are diferite\n numere de zile",
    "   STIAI CA: \n Dacă arunci un zar, poți obține\n unul dintre cele 6 numere:\n 1, 2, 3, 4, 5 sau 6.",
    "   STIAI CA: \n Un triunghi are trei laturi\n și trei unghiuri.",
    "   STIAI CA: \n Dacă imparti 6 în două părți\n egale, vei obține 3 și 3. 3 + 3 = 6.",
    "   STIAI CA: \n Un litru de apă cântărește\n aproximativ un kilogram.",
    "   STIAI CA: \n O zi are 24 de ore, \n iar fiecare oră are \n 60 de minute.",
    "   STIAI CA: \n Un cerc este o formă \n geometrică care nu are\n niciun colț sau margini.",
    "   STIAI CA: \n Dacă aduni toate cifrele \n de la 1 la 9 (1 + 2 + 3 + ... + 9),\n vei obține suma 45.",
    "   STIAI CA: \n Numerele pot fi adăugate \n și scăzute în multe moduri diferite,\n iar matematica este plină de\n provocări interesante.",
]

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

function getRandomFunFact(funFactsList) {
    const randomIndex = Math.floor(Math.random() * funFactsList.length);
    const textWithLineBreaks = funFactsList[randomIndex].split('\n').map((line, index) => (
        <React.Fragment key={index}>
            {line}
            <br />
        </React.Fragment>
    ));
    return <div>{textWithLineBreaks}</div>;
}

function getRandomImageElement(imagesList) {
    // Get a random index based on the length of the imagesList array
    const randomIndex = Math.floor(Math.random() * imagesList.length);
    // Select the image at the random index
    const randomImage = imagesList[randomIndex];
    // Return an image element for the randomly selected image
    return (
        <img
            key={randomImage.id}
            src={randomImage.src}
            alt={randomImage.alt}
            className='character-image'
        />
    );
}

function getRandomNumber() {
    // Generate a random number between 1 and 14
    return Math.floor(Math.random() * 14) + 1;
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
    const [randomContent, setRandomContent] = useState(null);

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
        fontSize: '2rem',
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

    const navigate = useNavigate();
    useEffect(() => {
        if (score > 9 && levelNumber <= 3) {
            setScore(0);
            navigate(`/next-level/${levelNumber}`);
        }
        else if (levelNumber === 4 && score === 10) {
            navigate('/final')
        }
    }, [score, levelNumber, navigate]);

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
        // debugger;
        return test;
    };

    const checkTheAnswer = () => {
        var win = currentOperation[5 + activeIndex] === currentOperation[8];
        if (win) {
            setRandomContent({
                imageElement: getRandomImageElement(imagesList),
                funFact: getRandomFunFact(funFactsList)
            });
            if (score > 9) {
                window.alert("Felicitari");
            }
            setScore(score + 1);
            setActiveIndex(null);
            const randomOperation = getRandomOperation(operations);
            setCurrentOperation(randomOperation);
        }
        else {
            setRandomContent({
                imageElement: getRandomImageElement(imagesList),
                funFact: "Mai incearca o data!"
            });
        }
    }

    const cancelAnswer = () => {
        setActiveIndex(null);
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {isReady ? (
                <>
                    <div>
                        <h1>Level {levelNumber}</h1>
                        <div style={{ fontSize: 25, fontFamily: 'Lucida Handwriting', right: '85px', top: '10px', position: 'absolute', color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: '1px', borderRadius: '20px', top: '5px' }}>
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
                            {randomContent && (
                                <div>
                                    {randomContent.imageElement}
                                    <img src={textBubble} alt="Text Bubble" className="text-bubble" />
                                    <div style={{ fontSize: 15, fontFamily: 'Lucida Handwriting', position: 'absolute', bottom: '550px', right: '190px', width: '400px', height: 'auto' }}>
                                        {randomContent.funFact}
                                    </div>
                                </div>
                            )}
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
                                    fontSize: '24px',
                                    borderRadius: '10px',
                                    boxShadow: '4px 4px 0px #2E7D32', // Shadow for the 3D effect
                                    cursor: 'pointer',
                                    marginRight: '20px'
                                }}>
                                Verifică
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
                                    fontSize: '24px',
                                    borderRadius: '10px',
                                    boxShadow: '4px 4px 0px #D32F2F', // Shadow for the 3D effect
                                    cursor: 'pointer',
                                }}>
                                Anulează răspunsul
                            </button>
                        </div>
                    </div>
                </>
            ) : (
                <div style={{
                    fontSize: 50, textAlign: 'center', color: '#F44336',
                    textShadow: '2px 2px 0px #D32F2F',
                    position: 'absolute'
                }}>
                    <h2>Ești pregătit pentru aventură?</h2>
                    <button onClick={handleReadyClick}
                        style={{

                            backgroundColor: '#4CAF50', // Red color
                            border: 'none',
                            //fontFamily : 'Lucida Handwriting',
                            color: 'white',
                            padding: '15px 32px',
                            textAlign: 'center',
                            textDecoration: 'none',
                            display: 'inline-block',
                            fontSize: '24px',
                            marginRight: '20px',
                            borderRadius: '10px',
                            boxShadow: '4px 4px 0px #2E7D32', // Shadow for the 3D effect
                            cursor: 'pointer',
                        }}>
                        DA
                    </button>
                    <Link to="/">
                        <button
                            style={{
                                backgroundColor: '#F44336', // Red color
                                border: 'none',
                                color: 'white',
                                padding: '15px 32px',
                                textAlign: 'center',
                                textDecoration: 'none',
                                display: 'inline-block',
                                fontSize: '24px',
                                borderRadius: '10px',
                                boxShadow: '4px 4px 0px #D32F2F', // Shadow for the 3D effect
                                cursor: 'pointer',
                            }}>NU</button>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Level;
