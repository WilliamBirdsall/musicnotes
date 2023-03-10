import { useQuery } from '@tanstack/react-query';
import getNotes from '../../queries/getNotes';

import Note from '../note/Note';

const NoteList = () => {
    const notes = useQuery(['notes'], getNotes);

    return(
        <>
            <div className="note-list">
                {notes.data?.map(note => <Note key={note.id} {...note} />)}
            </div>
        </>
    );
};

export default NoteList;
