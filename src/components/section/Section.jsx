import CommentList from '../comment/CommentList';
import SectionActions from './SectionActions';

const Section = (props) => {
    const { noteId } = props.noteId;
    const {title, start, end, id, comments} = props.section;

    return(
        <div className="section">
            <h3 className="section__title">{title}</h3>
            <div className="section__times">
                <span className="section__start">{start}</span>
                -
                <span className="section__end">{end}</span>
            </div>
            <div className="section__commments">
                <CommentList sectionId={id} comments={comments} />
            </div>
            <SectionActions id={id} noteId={noteId} />
        </div>
    );
}

export default Section;
