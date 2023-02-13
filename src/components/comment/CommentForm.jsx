import { useState } from 'react';

const CommentForm = (props) => {
    const [comment, setComment] = useState({
        text: props.commentData ? props.commentData.text : '',
        tag: props.commentData ? props.commentData.tag : 'untagged'
    });

    const { text, tag } = comment;

    const submitText = props.submitText;

    return (
        <form action={props.mutation.mutate}>
            <label htmlFor="text">Text:</label>
            <textarea name="text" cols="30" rows="10" defaultValue={comment.text}></textarea>

            <label htmlFor="tag">Tag:</label>
            <select name="tag" defaultValue={comment.tag}>
                <option value="rythmic">Rythmic</option>
                <option value="melodic">Melodic</option>
                <option value="harmonic">Harmonic</option>
                <option value="sound-design">Sound Design</option>
                <option value="untagged">Untagged</option>
            </select>
        </form>
    );
}

export default CommentForm;
