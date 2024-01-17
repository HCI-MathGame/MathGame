import React from "react";
import { Link, useParams } from "react-router-dom";

const NextLevelPage = () => {
    const { level } = useParams();
    return (
        <div>
            <h1>Felicitări! Ai completat nivelul!</h1>
            <Link to={`/Level/${parseInt(level) + 1}`}>
                <button>Du-te la nivelul următor</button>
            </Link>
            <Link to="/">
                <button>Du-te acasă</button>
            </Link>
        </div>
    );
};

export default NextLevelPage;
