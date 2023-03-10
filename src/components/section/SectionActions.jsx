import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useContext } from 'react';
import { createPortal } from 'react-dom';

import { ModalContext } from '../template/ModalContext';
import { NoteContext } from './../note/NoteContext';

import Icons from '../shared/Icons';
import SectionForm from './SectionForm';

const SectionActions = (props) => {
    const queryClient = useQueryClient();

    const [modalContext, setModalContext] = useContext(ModalContext);
    const note = useContext(NoteContext);

    const { id } = props;

    const section = note.sections[id];


    const editSection = useMutation({
        mutationFn: (event) => {
            event.preventDefault();

            let updatedSection = Object.fromEntries(new FormData(event.target));
            updatedSection['id'] = id;
            updatedSection['comments'] = note.sections[id].comments;

            note.sections[id] = updatedSection;

            localStorage.setItem(note.id, JSON.stringify(note));

            // Close modal
            setModalContext(false);

            // Invalidate 'note' query
            queryClient.invalidateQueries({queryKey: ['note', note.id]});

            props.moreOpenToggle();
        }
    });

    const deleteSection = useMutation({
        mutationFn: (event) => {
            event.preventDefault();

            delete note.sections[id];

            localStorage.setItem(note.id, JSON.stringify(note));

            // Invalidate 'note' query
            return queryClient.resetQueries({queryKey: ['note', note.id]});
        }
    });

    return(
        <div className="section-actions">
            <button onClick={() => setModalContext(["editSection", section.id])} className="btn section-actions__edit">
                <Icons.EditIcon />
            </button>
                {modalContext[0] === "editSection" && section.id === modalContext[1] && createPortal(
                    <>
                        <div className="close-btn-wrapper">
                            <button className="btn" onClick={() => setModalContext(false)}>
                                <Icons.CloseIcon />
                            </button>
                        </div>
                        <h3>Edit Section</h3>
                        <SectionForm sectionData={section} mutation={editSection} submitText="Save" />
                    </>,
                    document.getElementById("modal")
                )}
            <button onClick={deleteSection.mutate} className="btn close-btn section-actions__delete">
                <Icons.DeleteIcon />
            </button>
        </div>
    );
};

export default SectionActions;
