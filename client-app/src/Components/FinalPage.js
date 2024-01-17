import React from "react";
import { Link } from "react-router-dom";
import image from '../img/image.jpg';

const CongratulationsPage = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

            <h1 style={{ color: '#F44336', fontSize: '48px' }}>Felicitări! Ai completat toate nivelele!</h1>
            <Link to="/">
                <button
                    style={{
                        backgroundColor: '#F44336', // Green color
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
                    }}>
                    Du-te la pagina principala
                </button>
            </Link>
        </div>
    );
};

export default CongratulationsPage;
