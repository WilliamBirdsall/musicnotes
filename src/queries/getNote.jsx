const getNote = async function({ queryKey }) {
    const [_, id] = queryKey:
    return await JSON.parse(localStorage.getItem(id));
}

export default getNote;
