import { Link } from 'react-router-dom';

const Note = (props) => {
    const noteLink = `/notes/${props.id}`;


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
        </div>
    );
};

export default Note;
