import {useState} from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';

import { NoteContext } from './NoteContext';

import CreateSectionButton from '../section/CreateSectionButton';
import getNote from '../../queries/getNote';
import Icons from '../shared/Icons';
import Section from '../section/Section';

const NoteDetail = (props) => {
    const queryClient = useQueryClient();

    // TODO: Show modal for delete confirmation
    const deleteNote = useMutation({
        mutationFn: (event) => {
            event.preventDefault();
            localStorage.removeItem(note.id);

            // Invalidate 'notes' query
            queryClient.invalidateQueries({queryKey: ['notes']});
        }
    });

    const [moreOpen, setMoreOpen] = useState(false);

    const { id } = useParams();

    const note = useQuery(['note', id], getNote).data;

    if(!note) return <>No note found :(</>

    const editLink = `/edit/${note.id}`;

    const sections = Object.values(note.sections);

    return (
        <NoteContext.Provider value={note}>
            <div className="note-detail">
                <h1 className="note-detail__heading">
                    {note.title} &ndash; {note.artist}
                {!moreOpen &&
                    <button onClick={() => setMoreOpen(true)} className="btn note__more-btn">
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
                </h1>
                <div className="note-detail__meta">
                    {note.genre} &bull; {note.bpm}bpm &bull; {note.noteKey} {note.scale}
                </div>
                <div className="note-detail__sections-heading">
                    <h2>Sections</h2>
                    <CreateSectionButton note={note} />
                </div>
                <div className="section-list">
                    {sections.map(s => <Section key={s.id} section={s} noteId={id} />)}
                </div>
            </div>
        </NoteContext.Provider>
    );
};

export default NoteDetail;
