import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useContext, useState } from 'react';
import { createPortal } from 'react-dom';

import { ModalContext } from '../template/ModalContext';
import { NoteContext } from './../note/NoteContext';

import CommentForm from '../comment/CommentForm';
import SectionForm from './SectionForm';

const SectionActions = (props) => {
    const queryClient = useQueryClient();

    const [modalContext, setModalContext] = useContext(ModalContext);
    const note = useContext(NoteContext);

    const { id, noteId } = props;

    const section = note.sections[id];

    const createComment = useMutation({
        mutationFn: (event) => {
            event.preventDefault();

            const commentId = crypto.randomUUID().slice(0,8);
            const newComment = Object.fromEntries(new FormData(event.target));
            newComment['id'] = commentId;

            note.sections[id].comments[commentId] = newComment;

            localStorage.setItem(note.id, JSON.stringify(note));

            // Invalidate 'note' query
            queryClient.invalidateQueries({queryKey: ['note']});
        }
    });

    const editSection = useMutation({
        mutationFn: (event) => {
            event.preventDefault();

            let updatedSection = Object.fromEntries(new FormData(event.target));
            updatedSection['id'] = id;

            note.sections[id] = updatedSection;

            localStorage.setItem(note.id, JSON.stringify(note));

            // Close modal
            setModalContext(false);

            // Invalidate 'note' query
            queryClient.invalidateQueries({queryKey: ['note']});
        }
    });

    const deleteSection = useMutation({
        mutationFn: (event) => {
            event.preventDefault();

            delete note.sections[id];

            localStorage.setItem(note.id, JSON.stringify(note));

            // Invalidate 'note' query
            queryClient.invalidateQueries({queryKey: ['note']});
        }
    });

    return(
        <div className="section-actions">
            <button onClick={() => setModalContext("addComment")} className="section__add-comment">+ Add Comment</button>
                {modalContext === "addComment" && createPortal(
                    <>
                        <button onClick={() => setModalContext(false)}>Close</button>
                        <h3>Add Comment</h3>
                        <CommentForm commentData={section} mutation={createComment} submitText="Submit" />
                    </>,
                    document.getElementById("modal")
                )}
            <button onClick={() => setModalContext("editSection")} className="section-actions__edit">Edit</button>
                {modalContext === "editSection" && createPortal(
                    <>
                        <button onClick={() => setModalContext(false)}>Close</button>
                        <h3>Edit Section</h3>
                        <SectionForm sectionData={section} mutation={editSection} submitText="Save" />
                    </>,
                    document.getElementById("modal")
                )}
            <button onClick={deleteSection.mutate} className="section-actions__delete">Delete</button>
        </div>
    );
};

export default SectionActions;
