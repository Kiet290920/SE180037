const API_URL = import.meta.env.VITE_API_URL;

export const getLessons = async () => (await fetch(`${API_URL}`)).json();
export const getLesson = async id => (await fetch(`${API_URL}/${id}`)).json();
export const deleteLesson = async id =>
    fetch(`${API_URL}/${id}`, { method: 'DELETE' });
export const addLesson = async data =>
    fetch(`${API_URL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
export const updateLesson = async (id, data) =>
    fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
