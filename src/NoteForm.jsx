import { useState } from 'react';

const NoteForm = (props) => {
    const [note, setNote] = useState({
        title: props.note ? props.note.title : '',
        artist: props.note ? props.note.artist : '',
        genre: props.note ? props.note.genre : '',
        key: props.note ? props.note.key : '',
        scale: props.note ? props.note.scale : ''
    });

    const { title, artist, genre, key, scale } = note;

    return(
        <form onSubmit={props.onSubmit.mutate}>
            <label htmlFor="">Title:</label>
            <input type="text" name="title" id="title"/>

            <label htmlFor="">Artist:</label>
            <input type="text" name="artist" id="artist"/>

            <label htmlFor="">Genre:</label>
            <input type="text" name="genre" id="genre"/>

            <label htmlFor="">BPM</label>
            <input type="number" name="bpm" id="bpm"/>

            <label htmlFor="noteKey">Key:</label>
            <select type="select" name="noteKey" id="noteKey">
                <option value="C">C</option>
                <option value="C#">C#</option>
                <option value="D">D</option>
                <option value="D#">D#</option>
                <option value="E">E</option>
                <option value="F">F</option>
                <option value="F#">F#</option>
                <option value="G">G</option>
                <option value="G#">G#</option>
                <option value="A">A</option>
                <option value="A#">A#</option>
                <option value="B">B</option>
            </select>

            <select name="scale" id="scale">
                <option value="major">Major</option>
                <option value="minor">Minor</option>
            </select>

            <input type="submit" value="Create"/>
        </form>
    )
};

export default NoteForm;
