import CommentList from '../comment/CommentList';
import SectionActions from './SectionActions';

const Section = (props) => {
    const { noteId } = props.noteId;
    const {title, start, end, id, comments} = props.section;

    return(
        <div className="section">
            <div className="section__header">
                <h3 className="section__title">{title}</h3>
                <span className="section__times">{start}-{end}</span>
                <SectionActions id={id} />
            </div>
            <div className="section__commments">
                <CommentList sectionId={id} comments={comments} />
            </div>
        </div>
    );
}

export default Section;
