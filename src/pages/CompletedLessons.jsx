import { useEffect, useState } from 'react';
import { getLessons } from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function CompletedLessons() {
    const [lessons, setLessons] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getLessons().then(data =>
            setLessons(
                data.filter(l => l.isCompleted).sort((a, b) => b.id - a.id)
            )
        );
    }, []);

    return (
        <ul className='list-group'>
            {lessons.map(l => (
                <li
                    key={l.id}
                    className='list-group-item d-flex justify-content-between'
                    onClick={() => navigate(`/se180037/lessons/${l.id}`)}
                >
                    <div>
                        {l.lessonTitle} - {l.level}
                    </div>
                    <img src={l.lessonImage} alt='img' height={40} />
                </li>
            ))}
        </ul>
    );
}
