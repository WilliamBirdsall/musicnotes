import { useContext, useState } from 'react';
import { useMutation } from "@tanstack/react-query";
import { ModalContext } from '../template/ModalContext';
import { NoteContext } from './../note/NoteContext';
import { createPortal } from 'react-dom';

import CommentForm from '../comment/CommentForm';
import CommentList from '../comment/CommentList';
import SectionActions from './SectionActions';
import Icons from '../shared/Icons';


const Section = (props) => {
    const {title, start, end, id, comments} = props.section;

    const [moreOpen, setMoreOpen] = useState(false);

    const toggleMoreOpen = () => {
        moreOpen ? setMoreOpen(false) : setMoreOpen(true);
    };

    const [modalContext, setModalContext] = useContext(ModalContext);
    const note = useContext(NoteContext);

    const createComment = useMutation({
        mutationFn: (event) => {
            event.preventDefault();

            const commentId = crypto.randomUUID().slice(0,8);
            const newComment = Object.fromEntries(new FormData(event.target));
            newComment['id'] = commentId;

            note.sections[id].comments[commentId] = newComment;

            localStorage.setItem(note.id, JSON.stringify(note));

            // Close modal
            setModalContext(false);

            // Invalidate 'note' query
            queryClient.invalidateQueries({queryKey: ['note', note.id]});

            props.moreOpenToggle();
        }
    });

    return(
        <div className="section">
            <div className="section__header">
                <h3 className="section__title">{title}</h3>
                <span className="section__times">
                { start && end &&
                    `${start}-${end}`
                }
                </span>
                {!moreOpen &&
                    <button onClick={() => toggleMoreOpen()} className="btn section__more-btn">
                        <Icons.MoreIcon />
                    </button>
                }
                {moreOpen && <SectionActions id={id} moreOpenToggle={toggleMoreOpen} />}
            </div>
            <div className="section__commments">
                <CommentList sectionId={id} comments={comments} />
            </div>
            <button onClick={() => setModalContext(["addComment", id])} className="btn section__add-comment">
                <Icons.NewItemSquareIcon />
            </button>
                {modalContext[0] === "addComment" && id === modalContext[1] && createPortal(
                    <>
                        <button className="btn" onClick={() => setModalContext(false)}>
                            <Icons.CloseIcon />
                        </button>
                        <h3>Add Comment</h3>
                        <CommentForm commentData={props.section} mutation={createComment} submitText="Submit" />
                    </>,
                    document.getElementById("modal")
                )}
        </div>
    );
}

export default Section;
