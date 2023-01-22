import CreateSection from './CreateSection';
import Section from './Section';

const Sections = (props) => {
    return(
        <section>
            <h2>Sections</h2>

            <div className="sections">
                {props.sections?.map((section) => {
                    return <Section {...section} />
                })}
            </div>

            <CreateSection {...props} />
        </section>
    );
};

export default Sections;
