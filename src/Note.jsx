import { useParams } from 'react-router';

import NoteDetail from './NoteDetail';
import Sections from './Sections';

const Note = function() {
    const { id } = useParams();

    // Query localStorage for note by ID
    const noteData = JSON.parse(localStorage.getItem(id));

    return(
        <div className="note">
            <NoteDetail {...noteData} />
            <Sections {...noteData.sections} />
        </div>
    );
};

export default Note;
