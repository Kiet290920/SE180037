import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getLesson } from '../services/api';

export default function LessonDetail() {
    const { id } = useParams();
    const [lesson, setLesson] = useState(null);

    useEffect(() => {
        getLesson(id).then(setLesson);
    }, [id]);

    if (!lesson) return <p>Loading...</p>;

    return (
        <div>
            <h2>{lesson.lessonTitle}</h2>
            <img
                src={lesson.lessonImage}
                alt={lesson.lessonTitle}
                className='img-fluid mb-3'
            />
            <p>
                <strong>Level:</strong> {lesson.level}
            </p>
            <p>
                <strong>Completed:</strong> {lesson.isCompleted ? 'Yes' : 'No'}
            </p>
            <p>
                <strong>Estimated Time:</strong>{' '}
                {lesson.estimatedTime.toLocaleString()} minutes
            </p>
        </div>
    );
}
