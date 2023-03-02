import { useState } from 'react';

import CommentActions from './CommentActions';

const Comment = (props) => {
    const { text, tag, id } = props.comment;
    const sectionId = props.sectionId;

    const classes = `comment ${tag}`;

    const formattedTag = tag.replace('-', ' ');

    return (
        <div className={classes}>
            <div className="comment__upper-section">
                <div className="comment__tag">{formattedTag}</div>
                <CommentActions sectionId={sectionId} commentId={id}/>
            </div>
            <div className="comment__text">
                {text}
            </div>
        </div>
    );
}

export default Comment;
