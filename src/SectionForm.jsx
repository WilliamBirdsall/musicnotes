import { useState } from 'react';

const SectionForm = (props) => {
    const [section, setSection] = useState({
        title: props.sectionData ? props.sectionData.title : '',
        start: props.sectionData ? props.sectionData.start : '',
        end: props.sectionData ? props.sectionData.end : '',
    });

    const { title, start, end } = section;

    const submitText = props.submitText;

    return(
        <form onSubmit={props.mutation.mutate}>
            <label htmlFor="">Title:</label>
            <input type="text" name="title" id="title" defaultValue={title} />

            <label htmlFor="">Start:</label>
            <input type="text" name="start" id="start" defaultValue={start} />

            <label htmlFor="">End:</label>
            <input type="text" name="end" id="end" defaultValue={end} />

            <input type="submit" value={submitText} />
        </form>
    )
};

export default SectionForm;
