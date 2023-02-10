const Section = (props) => {
    return(
        <div className="section">
            <h5 className="section__title">{props.title}</h5>
            <div className="section__times">
                <span className="section__start">{props.start}</span>
                -
                <span className="section__end">{props.end}</span>
            </div>
        </div>
    );
}

export default Section;
