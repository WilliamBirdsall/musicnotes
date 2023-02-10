import { useMutation } from "@tanstack/react-query";
import { createPortal } from 'react-dom';
import { useState } from 'react';
import { useParams } from 'react-router';

import SectionForm from './SectionForm';

const CreateSectionButton = (props) => {
    const [showModal, setShowModal] = useState(false);

    const note = props.note;

    const createSection = useMutation({
        mutationFn: (event) => {
            event.preventDefault();

            const secID = crypto.randomUUID().slice(0,8);
            const newSection = Object.fromEntries(new FormData(event.target));
            newSection['id'] = secID;
            newSection['comments'] = {};

            note.sections[secID] = newSection;

            return localStorage.setItem(note.id, JSON.stringify(note));
        }
    });

    return (
        <>
            <button onClick={() => setShowModal(true)}>+ Add Section</button>
                {showModal && createPortal(
                    <>
                        <button onClick={() => setShowModal(false)}>Close</button>
                        <h3>New Section</h3>
                        <SectionForm mutation={createSection} submitText="Create" />
                    </>,
                    document.getElementById("modal")
                )}
        </>
    );
};

export default CreateSectionButton;
