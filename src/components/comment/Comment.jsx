import { useState } from 'react';

import CommentActions from './CommentActions';

const Comment = (props) => {
    const { text, tag } = props.comment;

    const classes = `comment ${tag}`;

    return (
        <div className={classes}>
            <div className="comment__text">
                {text}
            </div>
            <CommentActions />
        </div>
    );
}

export default Comment;
