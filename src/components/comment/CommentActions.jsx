import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useContext, useState } from 'react';
import { createPortal } from 'react-dom';

import { NoteContext } from './../note/NoteContext';

import CommentForm from './CommentForm';

const CommentActions = (props) => {
    const queryClient = useQueryClient();

    const [showModal, setShowModal] = useState(false);

    const note = useContext(NoteContext);

    const { sectionId, commentId } = props;

    const comment = note.sections[sectionId].comments[commentId];

    const editComment = useMutation({
        mutationFn: (event) => {
            event.preventDefault();

            let updatedComment = Object.fromEntries(new FormData(event.target));
            updatedComment['id'] = commentId;

            note.sections[sectionId].comments[commentId] = updatedComment;

            localStorage.setItem(note.id, JSON.stringify(note));

            // Close modal
            setShowModal(false);

            // Invalidate 'note' query
            queryClient.invalidateQueries({queryKey: ['note']});
        }
    });

    const deleteComment = useMutation({
        mutationFn: (event) => {
            event.preventDefault();

            delete note.sections[sectionId].comments[commentId];

            localStorage.setItem(note.id, JSON.stringify(note));

            // Invalidate 'note' query
            queryClient.invalidateQueries({queryKey: ['note']});
        }
    });

    return (
        <div className="comment-actions">
            <button onClick={() => setShowModal(true)} className="comment-actions__edit">Edit</button>
                {showModal && createPortal(
                    <>
                        <button onClick={() => setShowModal(false)}>Close</button>
                        <h3>Edit Comment</h3>
                        <CommentForm commentData={comment} mutation={editComment} submitText="Save" />
                    </>,
                    document.getElementById("modal")
                )}
            <button onClick={deleteComment.mutate} className="comment-actions__delete">Delete</button>
        </div>
    );
};

export default CommentActions;
