import { useEffect, useState } from 'react';
import { getLessons, deleteLesson } from '../services/api';
import { Link, useNavigate } from 'react-router-dom';

export default function AllLessons() {
    const [lessons, setLessons] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getLessons().then(data => setLessons(data.sort((a, b) => b.id - a.id)));
    }, []);

    const handleDelete = async id => {
        if (confirm('Are you sure to delete?')) {
            await deleteLesson(id);
            setLessons(lessons.filter(l => l.id !== id));
            alert('Deleted');
        }
    };

    return (
        <div>
            <h2>All Lessons</h2>
            <Link to='/se180037/add-lesson' className='btn btn-success mb-3'>
                Add New
            </Link>
            <ul className='list-group'>
                {lessons.map(l => (
                    <li
                        className='list-group-item d-flex justify-content-between align-items-center'
                        key={l.id}
                    >
                        <div
                            onClick={() =>
                                navigate(`/se180037/lessons/${l.id}`)
                            }
                        >
                            {l.lessonTitle} - {l.level} - {l.estimatedTime} mins
                        </div>
                        <div>
                            <Link
                                to={`/se180037/edit-lesson/${l.id}`}
                                className='btn btn-sm btn-primary me-2'
                            >
                                Edit
                            </Link>
                            <button
                                className='btn btn-sm btn-danger'
                                onClick={() => handleDelete(l.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
