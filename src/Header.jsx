import { Link } from 'react-router-dom';

const Header = function() {
    return(
        <header>
            <Link to="/" className="logo">MusicNotes</Link>
            <nav>
                <Link to="/create" className="create-btn">+ New Note</Link>
                <Link to="/about">About</Link>
            </nav>
        </header>
    );
};

export default Header;
