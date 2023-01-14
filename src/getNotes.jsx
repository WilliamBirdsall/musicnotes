const getNotes = async function({ queryKey }) {
    return await JSON.parse(localStorage.getItem('notes'));
}

export default getNotes;
