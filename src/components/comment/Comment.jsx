import { useState } from 'react';

import CommentActions from './CommentActions';
import Icons from '../shared/Icons';

const Comment = (props) => {
    const { text, tag, id } = props.comment;
    const sectionId = props.sectionId;

    const classes = `comment ${tag}`;

    const formattedTag = tag.replace('-', ' ');

    const [moreOpen, setMoreOpen] = useState(false);

    const toggleMoreOpen = () => {
        moreOpen ? setMoreOpen(false) : setMoreOpen(true);
    };

    return (
        <div className={classes}>
            <div className="comment__upper-section">
                <div className="comment__tag">{formattedTag}</div>
                {!moreOpen &&
                    <button onClick={() => toggleMoreOpen()} className="btn comment-actions__more-btn">
                        <Icons.MoreIcon />
                    </button>
                }
                {moreOpen && <CommentActions sectionId={sectionId} commentId={id} moreOpenToggle={toggleMoreOpen}/>}
            </div>
            <div className="comment__text">
                {text}
            </div>
        </div>
    );
}

export default Comment;
