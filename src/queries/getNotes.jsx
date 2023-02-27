const getNotes = async function({ queryKey }) {
    const parseNote = id => JSON.parse(localStorage.getItem(id));

    return Object.keys(localStorage).map(parseNote);
}

export default getNotes;
