import { Link } from 'react-router-dom';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import {useState} from 'react';

import Icons from '../shared/Icons';

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

    const [moreOpen, setMoreOpen] = useState(false);

    const toggleMoreOpen = () => {
        moreOpen ? setMoreOpen(false) : setMoreOpen(true);
    };

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
            {!moreOpen &&
                <button onClick={() => toggleMoreOpen()} className="btn note__more-btn">
                    <Icons.MoreIcon />
                </button>
            }
            {moreOpen &&
                <>
                    <Link to={editLink} className="note__edit">
                        <Icons.EditIcon />
                    </Link>
                    <button onClick={deleteNote.mutate} className="btn note__delete">
                        <Icons.DeleteIcon />
                    </button>
                </>
            }
        </div>
    );
};

export default Note;
