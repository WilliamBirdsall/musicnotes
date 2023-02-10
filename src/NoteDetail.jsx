import { useParams } from 'react-router';

import CreateSectionButton from './CreateSectionButton';
import Section from './Section';

const NoteDetail = (props) => {
    const { id } = useParams();

    const note = JSON.parse(localStorage.getItem(id));

    return (
        <div className="note-detail">
            <h3 className="note-detail__heading">
                <span className="note-detail__title">{note.title}</span>
                -
                <span className="note-detail__artist">{note.artist}</span>
            </h3>
            <div className="note-detail__meta">
                <span className="note-detail__genre">{note.genre}</span>
                <span className="note-detail__bpm">{note.bpm}</span>
                <span className="note-detail__key">{note.noteKey}</span>
                <span className="note-detail__scale">{note.scale}</span>
            </div>
            <h4>Sections</h4>
            <div className="section-list">
                {Object.values(note.sections).map(section => <Section {...section} />)}
            </div>
            <CreateSectionButton note={note} />
        </div>
    );
};

export default NoteDetail;
