const getNotes = async function({ queryKey }) {
    return Object.keys(localStorage).map((id) => {
        return JSON.parse(localStorage.getItem(id));
    });
}

export default getNotes;
