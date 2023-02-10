import { useQueryClient, useMutation } from "@tanstack/react-query";

import NoteForm from './NoteForm';

const CreateNote = () => {
    const queryClient = useQueryClient();

    const createNote = useMutation({
        mutationFn: (event) => {
            event.preventDefault();

            const id = crypto.randomUUID().slice(0,8);

            const newNote = Object.fromEntries(new FormData(event.target));
            newNote['id'] = id;
            newNote['sections'] = {};

            // Invalidate 'notes' query
            queryClient.invalidateQueries({queryKey: ['notes']});

            return localStorage.setItem(id, JSON.stringify(newNote));
        }
    });

    return (
        <NoteForm mutation={createNote} submitText="Create" />
    );
};

export default CreateNote;
