import { useQueryClient, useMutation } from '@tanstack/react-query';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router';

import NoteForm from './NoteForm';

const EditNote = () => {
    const {id} = useParams();
    const oldNote = JSON.parse(localStorage.getItem(id));
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const editNote = useMutation({
        mutationFn: (event) => {
            event.preventDefault();

            const updatedNote = Object.fromEntries(new FormData(event.target));
            updatedNote["id"] = oldNote.id;
            updatedNote["sections"] = oldNote.sections;


            // Invalidate 'notes' query
            queryClient.invalidateQueries({queryKey: ['notes']});
            queryClient.invalidateQueries({queryKey: ['note', id]});

            localStorage.setItem(id, JSON.stringify(updatedNote));

            navigate('/');
        }
    });

    return (
        <NoteForm noteData={oldNote} mutation={editNote} submitText="Save" />
    );
};

export default EditNote;
