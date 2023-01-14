import { useQuery } from "@tanstack/react-query";
import getNotes from "./getNotes";
import NoteLink from "./NoteLink";

const NoteList = function() {
    const results = useQuery(['notes'], getNotes);

    return(
        <div className="notes">
            {results.data?.map((note) => {
                return <NoteLink {...note} />
            })}
        </div>
    );
};

export default NoteList;
