import { useEffect, useState } from 'react';
import { getLesson, updateLesson } from '../services/api';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditLesson() {
    const { id } = useParams();
    const [form, setForm] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        getLesson(id).then(setForm);
    }, [id]);

    const handleChange = e => {
        const { name, value, type, checked } = e.target;
        setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        await updateLesson(id, form);
        navigate('/se180037/all-lessons');
    };

    if (!form) return <p>Loading...</p>;

    return (
        <form onSubmit={handleSubmit}>
            <input
                name='lessonTitle'
                value={form.lessonTitle}
                className='form-control mb-2'
                onChange={handleChange}
                required
            />
            <input
                name='lessonImage'
                value={form.lessonImage}
                className='form-control mb-2'
                onChange={handleChange}
                required
            />
            <input
                name='estimatedTime'
                value={form.estimatedTime}
                className='form-control mb-2'
                onChange={handleChange}
                required
            />
            <select
                name='level'
                value={form.level}
                className='form-control mb-2'
                onChange={handleChange}
            >
                <option>N1</option>
                <option>N2</option>
                <option>N3</option>
                <option>N4</option>
                <option>N5</option>
            </select>
            <div className='form-check mb-2'>
                <input
                    name='isCompleted'
                    type='checkbox'
                    checked={form.isCompleted}
                    className='form-check-input'
                    onChange={handleChange}
                />
                <label className='form-check-label'>Completed</label>
            </div>
            <button className='btn btn-primary'>Update Lesson</button>
        </form>
    );
}
