const Note = function(props) {
    return(
        <div className="note">
            <h2>{props.title} – {props.artist}</h2>
            <div className="meta-data">
                <span className="genre">{props.genre}</span>
                <span className="bpm">{props.bpm}</span>
                <span className="scale">{props.noteKey} {props.scale}</span>
            </div>
        </div>
    );
};

export default Note;
