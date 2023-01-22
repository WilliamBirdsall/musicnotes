const Section = (props) => {
    return (
        <div className="section">
            <h3>{props.title}</h3>
            <span className="start">{props.start}</span> – <span className="end">{props.end}</span>
            <div className="comments">
                {props.comments}
            </div>
            <div className="section-actions">
                <button className="edit-section">Edit</button>
                <button className="delete-section">Delete</button>
            </div>
        </div>
    );
};

export default Section;
