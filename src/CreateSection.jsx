const CreateSection = (props) => {
    function addSection() {
        const sections = props;
    };

    return(
        <button onClick={addSection}>+ Add Section</button>
    );
};

export default CreateSection;
