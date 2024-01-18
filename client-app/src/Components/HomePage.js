import React from "react";
import './styles/image.css';
import logo from '../img/fundal.png';
import image from '../img/image.jpg';
import { Link } from "react-router-dom";

const HomePage = () => {
    const startGame = () => {
        // Aici poți adăuga logica pentru a începe jocul
        // alert("Jocul a început! Have fun!");
    };

    return (
        <>
            <div style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <h1 style={{
                    fontSize: '3em',
                    color: '#F44336',
                    textShadow: '2px 2px 0px #D32F2F',
                    position: 'absolute',
                    top: '5%',
                    transform: 'translateY(-50%)',
                }}
                >Bine ați venit la jocul interactiv, Mathle Quest!</h1>
                <h2 style={{
                    fontSize: '3em',
                    color: '#F44336',
                    textShadow: '2px 2px 0px #D32F2F',
                    position: 'absolute',
                    top: '12%',
                    transform: 'translateY(-50%)',
                }}
                > Să înceapă aventura!
                </h2>

                <img src={logo} alt="Logo" style={{ width: '500px', marginBottom: '20px' }} />

                <Link to="/Level/1">
                    <button
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
                        }}>Joacă toate nivelele!</button>
                </Link>
                {/* Additional level buttons */}
                {[1, 2, 3, 4].map(level => (
                    <Link key={level} to={`/Level/${level}`}>
                        <button style={{
                            backgroundColor: '#F44336', // Red color
                            border: 'none',
                            color: 'white',
                            padding: '15px 32px',
                            textAlign: 'center',
                            textDecoration: 'none',
                            display: 'inline-block',
                            fontSize: '16px',
                            borderRadius: '10px',
                            boxShadow: '4px 4px 0px #D32F2F',
                            cursor: 'pointer',
                            marginTop: '15px'
                        }}>{level === 1 ? "Adunare" : level === 2 ? "Scădere" : level === 3 ? "Înmulțire" : "Împărțire"}</button>
                    </Link>
                ))}

            </div>
        </>
    );
};

export default HomePage;

