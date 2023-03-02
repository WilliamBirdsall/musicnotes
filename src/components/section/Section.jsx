import {useState} from 'react';

import CommentList from '../comment/CommentList';
import SectionActions from './SectionActions';
import Icons from '../shared/Icons';

const Section = (props) => {
    const {title, start, end, id, comments} = props.section;

    const [moreOpen, setMoreOpen] = useState(false);

    const toggleMoreOpen = () => {
        moreOpen ? setMoreOpen(false) : setMoreOpen(true);
    };

    return(
        <div className="section">
            <div className="section__header">
                <h3 className="section__title">{title}</h3>
                <span className="section__times">{start}-{end}</span>
                {!moreOpen &&
                    <button onClick={() => toggleMoreOpen()} className="btn section__more-btn">
                        <Icons.MoreCircleIcon />
                    </button>
                }
                {moreOpen && <SectionActions id={id} moreOpenToggle={toggleMoreOpen} />}
            </div>
            <div className="section__commments">
                <CommentList sectionId={id} comments={comments} />
            </div>
        </div>
    );
}

export default Section;
