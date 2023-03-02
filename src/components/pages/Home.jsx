import { Link } from 'react-router-dom';

import Icons from '../shared/Icons';
import NoteList from '../note/NoteList';

const Home = function() {
    return(
        <>
            <NoteList />
            <Link to="/create" className="create-btn">
                <Icons.NewNoteIcon />
            </Link>
        </>
    );
};

export default Home;
