import { Link } from 'react-router-dom';

const NoteLink = function(props) {
    const link = "/notes/" + props.id;
    return(
        <Link to={link} className="note-link">
            <h2>{props.title} – {props.artist}</h2>
            <div className="meta-data">
                <span className="genre">{props.genre}</span>
                <span className="bpm">{props.bpm}</span>
                <span className="scale">{props.noteKey} {props.scale}</span>
            </div>
        </Link>
    );
};

export default NoteLink;
