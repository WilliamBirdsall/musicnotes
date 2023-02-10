import SectionActions from './SectionActions';

const Section = (props) => {
    const {title, start, end, id} = props.section;

    return(
        <div className="section">
            <h3 className="section__title">{title}</h3>
            <div className="section__times">
                <span className="section__start">{start}</span>
                -
                <span className="section__end">{end}</span>
            </div>
            <SectionActions id={id} noteID={props.noteID} />
        </div>
    );
}

export default Section;
