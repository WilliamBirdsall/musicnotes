import { Link } from 'react-router-dom';
import Icons from '../shared/Icons';

const Header = function() {
    return(
        <header>
            <Link to="/" className="logo">MusicNotes</Link>
            <nav>
                <Link to="/about">
                    <Icons.HelpIcon />
                </Link>
            </nav>
        </header>
    );
};

export default Header;
