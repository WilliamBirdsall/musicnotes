import { useQueryClient, useMutation } from '@tanstack/react-query';
import { useParams } from 'react-router';

import NoteForm from './NoteForm';

const EditNote = () => {
    const {id} = useParams();
    const oldNote = JSON.parse(localStorage.getItem(id));
    const queryClient = useQueryClient();

    const editNote = useMutation({
        mutationFn: (event) => {
            event.preventDefault();

            const updatedNote = Object.fromEntries(new FormData(event.target));
            updatedNote["id"] = oldNote.id;
            updatedNote["sections"] = oldNote.sections;


            // Invalidate 'notes' query
            queryClient.invalidateQueries({queryKey: ['notes']});

            return localStorage.setItem(id, JSON.stringify(updatedNote));
        }
    });

    return (
        <NoteForm noteData={oldNote} mutation={editNote} submitText="Save" />
    );
};

export default EditNote;
