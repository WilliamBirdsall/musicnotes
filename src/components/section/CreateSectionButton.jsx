import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPortal } from 'react-dom';
import { useContext } from 'react';

import { ModalContext } from '../template/ModalContext';

import Icons from '../shared/Icons';
import SectionForm from './SectionForm';

const CreateSectionButton = (props) => {
    const queryClient = useQueryClient();

    const [modalContext, setModalContext] = useContext(ModalContext);

    const note = props.note;

    const createSection = useMutation({
        mutationFn: (event) => {
            event.preventDefault();

            const secID = crypto.randomUUID().slice(0,8);
            const newSection = Object.fromEntries(new FormData(event.target));
            newSection['id'] = secID;
            newSection['comments'] = {};

            note.sections[secID] = newSection;

            localStorage.setItem(note.id, JSON.stringify(note));

            // Close modal
            setModalContext(false);

            // Invalidate 'note' query
            queryClient.invalidateQueries({queryKey: ['note']});
        }
    });

    return (
        <>
            <button className="btn add-section-btn" onClick={() => setModalContext(["addSection", note.id])}>
                <Icons.NewItemIcon />
            </button>
                {modalContext[0] === "addSection" && modalContext[1] === note.id && createPortal(
                    <>
                        <button className="btn" onClick={() => setModalContext(false)}>
                            <Icons.CloseIcon />
                        </button>
                        <h3>New Section</h3>
                        <SectionForm mutation={createSection} submitText="Create" />
                    </>,
                    document.getElementById("modal")
                )}
        </>
    );
};

export default CreateSectionButton;
