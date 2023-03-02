import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useContext, useState } from 'react';
import { createPortal } from 'react-dom';

import { ModalContext } from '../template/ModalContext';
import { NoteContext } from '../note/NoteContext';

import CommentForm from './CommentForm';
import Icons from '../shared/Icons';

const CommentActions = (props) => {
    const queryClient = useQueryClient();

    const [modalContext, setModalContext] = useContext(ModalContext);
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
            setModalContext(false);

            // Invalidate 'note' query
            queryClient.invalidateQueries({queryKey: ['note']});

            // Toggle comment more menu
            props.moreOpenToggle();
        }
    });

    const deleteComment = useMutation({
        mutationFn: (event) => {
            event.preventDefault();

            delete note.sections[sectionId].comments[commentId];

            localStorage.setItem(note.id, JSON.stringify(note));

            // Invalidate 'note' query
            queryClient.resetQueries({queryKey: ['note', note.id]});
        }
    });

    return (
        <div className="comment-actions">
            <div className="comment-actions__menu">
                <button onClick={() => setModalContext(['editComment', commentId])} className="btn comment-actions__edit">
                    <Icons.EditIcon />
                </button>
                    {modalContext[0] === "editComment" && commentId === modalContext[1]  && createPortal(
                        <>
                            <button className="btn" onClick={() => setModalContext(false)}>Close</button>
                            <h3>Edit Comment</h3>
                            <CommentForm commentData={comment} mutation={editComment} submitText="Save" />
                        </>,
                        document.getElementById("modal")
                    )}
                <button onClick={deleteComment.mutate} className="btn close-btn comment-actions__delete">
                    <Icons.DeleteIcon />
                </button>
            </div>
        </div>
    );
};

export default CommentActions;
