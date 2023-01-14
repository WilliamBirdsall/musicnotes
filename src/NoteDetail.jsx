const NoteDetail = (props) => {
    return (
        <section>
            <h1>{props.title} – {props.artist}</h1>
            <div className="meta-data">
                <span className="genre">{props.genre}</span>
                <span className="bpm">{props.bpm}</span>
                <span className="scale">{props.noteKey} {props.scale}</span>
            </div>
        </section>
    );
};

export default NoteDetail;
