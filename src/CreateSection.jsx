import { createPortal } from 'react-dom';
import { useState } from 'react';
import { useMutation } from "@tanstack/react-query";

const CreateSection = (props) => {
    const [showModal, setShowModal] = useState(false);

    const mutation = useMutation({
        mutationFn: (event) => {
            event.preventDefault();

            const newSection = Object.fromEntries(new FormData(event.target));

            const noteID = props.id;
            const noteObj = JSON.parse(localStorage.getItem(noteID));

            noteObj.sections.push(newSection);

            setShowModal(false);

            return localStorage.setItem(noteID, JSON.stringify(noteObj));
        }
    });

    return(
        <>
        <button onClick={() => setShowModal(true)}>+ Add Section</button>
        {showModal && createPortal(
            <>
                <button onClick={() => setShowModal(false)}>Close</button>
                <h3>New Section</h3>
                <form onSubmit={mutation.mutate}>
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" id="title"/>
                    <label htmlFor="start">Start:</label>
                    <input type="text" name="start" id="end"/>
                    <label htmlFor="end">End:</label>
                    <input type="text" name="end" id="end"/>
                    <label htmlFor="comments">Comments:</label>
                    <textarea name="comments" id="" cols="30" rows="10"></textarea>
                    <input type="submit" value="Add Section"/>
                </form>
            </>,
            document.getElementById("modal")
        )}
        </>
    );
};

export default CreateSection;
