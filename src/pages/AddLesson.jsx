import { useState } from 'react';
import { addLesson } from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function AddLesson() {
    const [form, setForm] = useState({
        lessonTitle: '',
        lessonImage: '',
        level: 'N5',
        isCompleted: false,
        estimatedTime: ''
    });
    const navigate = useNavigate();

    const handleChange = e => {
        const { name, value, type, checked } = e.target;
        setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        if (form.lessonTitle.trim().split(' ').length < 2)
            return alert('Title must have more than 1 word');
        if (!/^https?:\/\//.test(form.lessonImage))
            return alert('Image must be valid URL');
        if (isNaN(form.estimatedTime))
            return alert('Estimated time must be a number');
        await addLesson(form);
        navigate('/se180037/all-lessons');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                name='lessonTitle'
                className='form-control mb-2'
                placeholder='Lesson Title'
                onChange={handleChange}
                required
            />
            <input
                name='lessonImage'
                className='form-control mb-2'
                placeholder='Image URL'
                onChange={handleChange}
                required
            />
            <input
                name='estimatedTime'
                className='form-control mb-2'
                placeholder='Estimated Time'
                onChange={handleChange}
                required
            />
            <select
                name='level'
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
                    className='form-check-input'
                    onChange={handleChange}
                />
                <label className='form-check-label'>Completed</label>
            </div>
            <button className='btn btn-success'>Add Lesson</button>
        </form>
    );
}
