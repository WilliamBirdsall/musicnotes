import { useMutation } from "@tanstack/react-query";

const NoteActions = (props) => {
    const deleteNote = useMutation({
        mutationFn: (event) => {
            event.preventDefault();
            console.log("Open delete? modal");
            console.log("Delete Note");
        }
    });

    const editNote = useMutation({
        mutationFn: (event) => {
            event.preventDefault();
            console.log("open modal w/ note data");
            console.log("Edit Note");
        }
    });

    return(
        <div className="note-actions">
            <button onClick={editNote.mutate} className="edit-note">Edit</button>
            <button onClick={deleteNote.mutate}className="delete-note">Delete</button>
        </div>
    );
};

export default NoteActions;
