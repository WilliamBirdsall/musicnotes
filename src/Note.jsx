import { useParams } from 'react-router';

import NoteDetail from './NoteDetail';
import Sections from './Sections';

const Note = function() {
    const { id } = useParams();

    // Query localStorage for note by ID
    const notes = JSON.parse(localStorage.getItem('notes'));
    const noteData = notes.filter((n) => { return  n.id === id })[0];

    return(
        <div className="note">
            <NoteDetail {...noteData} />
            <Sections {...noteData.sections} />
        </div>
    );
};

export default Note;
