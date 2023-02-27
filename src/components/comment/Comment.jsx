import { useState } from 'react';

import CommentActions from './CommentActions';

const Comment = (props) => {
    const { text, tag, id } = props.comment;
    const sectionId = props.sectionId;

    const classes = `comment ${tag}`;

    return (
        <div className={classes}>
            <div className="comment__text">
                {text}
            </div>
            <CommentActions sectionId={sectionId} commentId={id}/>
        </div>
    );
}

export default Comment;
