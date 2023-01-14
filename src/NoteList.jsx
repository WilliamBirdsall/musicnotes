import { useQuery } from "@tanstack/react-query";
import getNotes from "./getNotes";
import Note from "./Note";

const NoteList = function() {
    const results = useQuery(['notes'], getNotes);

    return(
        <div className="notes">
            {results.data?.map((note) => {
                return <Note {...note} />
            })}
        </div>
    );
};

export default NoteList;
