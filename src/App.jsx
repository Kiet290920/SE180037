import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AllLessons from './pages/AllLessons';
import CompletedLessons from './pages/CompletedLessons';
import LessonDetail from './pages/LessonDetail';
import AddLesson from './pages/AddLesson';
import EditLesson from './pages/EditLesson';

export default function App() {
    return (
        <Router>
            <Navbar />
            <div className='container mt-4'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route
                        path='/se180037/all-lessons'
                        element={<AllLessons />}
                    />
                    <Route
                        path='/se180037/completed-lessons'
                        element={<CompletedLessons />}
                    />
                    <Route
                        path='/se180037/lessons/:id'
                        element={<LessonDetail />}
                    />
                    <Route
                        path='/se180037/add-lesson'
                        element={<AddLesson />}
                    />
                    <Route
                        path='/se180037/edit-lesson/:id'
                        element={<EditLesson />}
                    />
                </Routes>
            </div>
        </Router>
    );
}
