import { useMutation } from "@tanstack/react-query";

import NoteForm from './NoteForm';

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
        <NoteForm onSubmit={mutation} />
    );
};

export default CreateNote;
