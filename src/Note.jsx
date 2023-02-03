import { Link } from 'react-router-dom';

const Note = (props) => {
    const link = `/notes/${props.id}`;

    return (
        <div className="note" key={props.id}>
            <Link to={link} className="note__link">
                <h3 className="note__heading">
                    <span className="note__title">{props.title}</span>
                    -
                    <span className="note__artist">{props.artist}</span>
                </h3>
            </Link>
            <div className="note__meta">
                <span className="note__genre">{props.genre}</span>
                <span className="note__bpm">{props.bpm}</span>
                <span className="note__key">{props.noteKey}</span>
                <span className="note__scale">{props.scale}</span>
            </div>
            <button className="note__edit">Edit</button>
            <button className="note__delete">Delete</button>
        </div>
    );
};

export default Note;
