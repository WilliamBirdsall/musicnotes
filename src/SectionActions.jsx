import { useMutation } from "@tanstack/react-query";
import { useState } from 'react';
import { createPortal } from 'react-dom';

import SectionForm from "./SectionForm.jsx";

const SectionActions = (props) => {
    const [showModal, setShowModal] = useState(false);

    const { id, noteID } = props;

    const note = JSON.parse(localStorage.getItem(noteID));
    const section = note.sections[id];

    const createComment = useMutation({
        mutationFn: (event) => {
            event.preventDefault();
            console.log("Create comment...", noteID, id);
        }
    });

    const editSection = useMutation({
        mutationFn: (event) => {
            event.preventDefault();
            console.log("Edit section...", noteID, id);

            let updatedSection = Object.fromEntries(new FormData(event.target));
            updatedSection['id'] = id;

            note.sections[id] = updatedSection;

            localStorage.setItem(noteID, JSON.stringify(note));
        }
    });

    const deleteSection = useMutation({
        mutationFn: (event) => {
            event.preventDefault();

            delete note.sections[id];

            localStorage.setItem(noteID, JSON.stringify(note));
        }
    });

    return(
        <div className="section-actions">
            <button onClick={createComment.mutate} className="section__add-comment">+ Add Comment</button>
            <button onClick={() => setShowModal(true)} className="section-actions__edit">Edit</button>
                {showModal && createPortal(
                    <>
                        <button onClick={() => setShowModal(false)}>Close</button>
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
