import Comment from './Comment';

const CommentList = (props) => {
    const comments = props.comments;

    return (
        <>
            <h4>Comments</h4>
            {Object.values(comments).map(comment => <Comment key={comment.id} comment={comment} />)}
        </>
    );
};

export default CommentList;
