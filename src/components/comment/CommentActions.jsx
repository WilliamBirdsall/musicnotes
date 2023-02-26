import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from 'react';
import { createPortal } from 'react-dom';

import CommentForm from './CommentForm';

const CommentActions = (props) => {
    const queryClient = useQueryClient();

    const [showModal, setShowModal] = useState(false);

    const comment = "";

    const editComment = useMutation({
        mutationFn: (event) => {
            event.preventDefault();

            console.log("Edit comment...");

            // Invalidate 'note' query
            queryClient.invalidateQueries({queryKey: ['note']});
        }
    });

    const deleteComment = useMutation({
        mutationFn: (event) => {
            event.preventDefault();

            console.log("Delete comment...");

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
