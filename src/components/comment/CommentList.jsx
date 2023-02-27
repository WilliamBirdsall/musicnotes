import Comment from './Comment';

const CommentList = (props) => {
    const sectionId = props.sectionId;
    const comments = Object.values(props.comments);

    if(!comments.length) return;

    return (
        <>
            {comments.map(c => <Comment key={c.id} comment={c} sectionId={sectionId} />)}
        </>
    );
};

export default CommentList;
