import { useState } from 'react';

const Comment = (props) => {
    const { text, tag } = props.comment;

    const classes = `comment ${tag}`;

    return (
        <div className={classes}>
            <div className="comment__text">
                {text}
            </div>
        </div>
    );
}

export default Comment;
