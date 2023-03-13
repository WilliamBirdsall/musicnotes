import { useState } from 'react';

const NoteForm = (props) => {
    const [note, setNote] = useState({
        title: props.noteData ? props.noteData.title : '',
        artist: props.noteData ? props.noteData.artist : '',
        genre: props.noteData ? props.noteData.genre : '',
        bpm: props.noteData ? props.noteData.bpm : '',
        noteKey: props.noteData ? props.noteData.noteKey : '',
        scale: props.noteData ? props.noteData.scale : ''
    });

    const { title, artist, genre, bpm, noteKey, scale } = note;

    const submitText = props.submitText;

    return(
        <form className="note-form" onSubmit={props.mutation.mutate}>
            <label htmlFor="">Title:</label>
            <input type="text" name="title" id="title" defaultValue={title} />

            <label htmlFor="">Artist:</label>
            <input type="text" name="artist" id="artist" defaultValue={artist} />

            <label htmlFor="">Genre:</label>
            <input type="text" name="genre" id="genre" defaultValue={genre} />

            <label htmlFor="">BPM</label>
            <input type="number" name="bpm" id="bpm" defaultValue={bpm} />

            <label htmlFor="noteKey">Key:</label>
            <select type="select" name="noteKey" id="noteKey" defaultValue={noteKey}>
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

            <select name="scale" id="scale" defaultValue={scale}>
                <option value="major">Major</option>
                <option value="minor">Minor</option>
            </select>

            <input type="submit" value={submitText} />
        </form>
    )
};

export default NoteForm;
