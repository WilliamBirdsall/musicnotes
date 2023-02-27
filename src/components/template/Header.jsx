import { Link } from 'react-router-dom';

const Header = function() {
    return(
        <header>
            <Link to="/" className="logo">MusicNotes</Link>
            <nav>
                <div className="nav-left">
                    <Link to="/">Notes</Link>
                    <Link to="/about">About</Link>
                </div>
                <div className="nav-right">
                    <Link to="/create" className="create-btn">+ New Note</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
