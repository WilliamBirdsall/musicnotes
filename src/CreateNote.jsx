import { useMutation } from "@tanstack/react-query";

const CreateNote = () => {
    const mutation = useMutation({
        mutationFn: (event) => {
            event.preventDefault();

            const id = crypto.randomUUID().slice(0,8);

            const newNote = Object.fromEntries(new FormData(event.target));
            newNote['id'] = id;
            newNote['sections'] = [];

            return localStorage.setItem(id, JSON.stringify(newNote));
        }
    });

    return (
        <form onSubmit={mutation.mutate}>
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

export default CreateNote;
