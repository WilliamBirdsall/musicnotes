import { Link } from 'react-router-dom';

import { useQueryClient, useMutation } from '@tanstack/react-query';

const Note = (props) => {
    const noteLink = `/notes/${props.id}`;
    const editLink = `/edit/${props.id}`;

    const queryClient = useQueryClient();

    // TODO: Show modal for delete confirmation
    const deleteNote = useMutation({
        mutationFn: (event) => {
            event.preventDefault();
            localStorage.removeItem(props.id);

            // Invalidate 'notes' query
            queryClient.invalidateQueries({queryKey: ['notes']});
        }
    });

    return (
        <div className="note">
            <Link to={noteLink} className="note__link">
                <h3 className="note__heading">
                    {props.title} &ndash; {props.artist}
                </h3>
            </Link>
            <div className="note__meta">
                {props.genre} &bull; {props.bpm}bpm &bull; {props.noteKey} {props.scale}
            </div>
            <Link to={editLink} className="note__edit">Edit</Link>
            <button onClick={deleteNote.mutate} className="note__delete">Delete</button>
        </div>
    );
};

export default Note;
