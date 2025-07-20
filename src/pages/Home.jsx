import { useEffect, useState } from 'react';
import { getLessons } from '../services/api';
import { Link } from 'react-router-dom';

export default function Home() {
    const [lessons, setLessons] = useState([]);

    useEffect(() => {
        getLessons()
            .then(data => {
                console.log('Fetched lessons:', data);
                const filtered = data.filter(lesson => !lesson.isCompleted);
                console.log('Uncompleted:', filtered);
                setLessons(filtered);
            })
            .catch(error => console.error('API error:', error));
    }, []);

    return (
        <div className='row'>
            {lessons.map(lesson => (
                <div className='col-md-4 mb-3' key={lesson.id}>
                    <div className='card h-100'>
                        <img
                            src={lesson.lessonImage}
                            className='card-img-top'
                            alt={lesson.lessonTitle}
                        />
                        <div className='card-body'>
                            <h5 className='card-title'>{lesson.lessonTitle}</h5>
                            <p>Level: {lesson.level}</p>
                            <p>Estimated: {lesson.estimatedTime} minutes</p>
                            <Link
                                to={`/se180037/lessons/${lesson.id}`}
                                className='btn btn-primary'
                            >
                                View
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
