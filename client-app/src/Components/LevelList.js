import { Link } from "react-router-dom";

const LevelList = () => {
    return (
        <div>
            <h2>Home Page</h2>
            <ul>
                <li>
                    <Link to="/Level/1">Level 1</Link>
                </li>
                <li>
                    <Link to="/Level/2">Level 2</Link>
                </li>
                <li>
                    <Link to="/Level/3">Level 3</Link>
                </li>
                <li>
                    <Link to="/Level/4">Level 4</Link>
                </li>
            </ul>
        </div>
    )
}

export default LevelList;