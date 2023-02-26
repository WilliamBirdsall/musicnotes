import Comment from './Comment';

const CommentList = (props) => {
    const sectionId = props.sectionId;
    const comments = Object.values(props.comments);

    return (
        <>
            <h4>Comments</h4>
            {comments.map(c => <Comment key={c.id} comment={c} sectionId={sectionId} />)}
        </>
    );
};

export default CommentList;
