import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MainLayout from './layout/MainLayout';
import Error from './pages/Error';
import Subjects from './pages/Subjects';
import Quiz from './pages/Quiz';

function App() {
    const GridBackground = () => (
        <div className="absolute inset-0 bg-onyx -z-10">
            <div className="absolute -z-10 inset-0 bg-[linear-gradient(to_right,rgba(238,232,44,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(238,232,44,0.07)_1px,transparent_1px)] bg-[size:16px_28px] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>
    );

    return (
        <div className="min-h-screen text-cloud relative overflow-hidden">
            <GridBackground />

            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/subjects" element={<Subjects />} />
                </Route>
                <Route path="/quiz/:id" element={<Quiz />} />
                <Route path="/404" element={<Error />} />
                <Route path="*" element={<Navigate to="/404" />} />
            </Routes>
        </div>
    );
}

export default App;
