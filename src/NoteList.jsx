import { useQuery } from "@tanstack/react-query";
import getNotes from "./getNotes";
import NoteActions from './NoteActions';
import NoteLink from "./NoteLink";

const NoteList = function() {
    const results = useQuery(['notes'], getNotes);

    return(
        <div className="notes">
            {results.data?.map((note) => {
                return (
                    <div className="note" data-note-id={note.id}>
                        <NoteLink {...note} />
                        <NoteActions note-id={note.id} />
                    </div>
                );
            })}
        </div>
    );
};

export default NoteList;
