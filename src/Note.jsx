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
            <Sections id={noteData.id} sections={noteData.sections} />
            <div className="note-actions">
                <button className="edit-note">Edit</button>
                <button className="delete-note">Delete</button>
            </div>
        </div>
    );
};

export default Note;
