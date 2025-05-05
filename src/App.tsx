import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MainLayout from './layout/MainLayout';
import Error from './pages/Error';
import Subjects from './pages/Subjects';
import QuizPage from './pages/QuizPage';

function App() {
    return (
        <div className="relative w-full bg-zinc-900 z-0 text-zinc-100">
            {/* Grid background */}
            <div className="-z-10 absolute inset-0 bg-[linear-gradient(to_right,#f4f4f510_1px,transparent_1px),linear-gradient(to_bottom,#f4f4f510_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_90%_75%_at_50%_0%,#000_70%,transparent_110%)]" />

            {/* Yellow gradient fade below grid */}
            <div className="-z-20 absolute inset-x-0 top-[75%] bottom-0 bg-gradient-to-b from-transparent to-yellow-500/10 pointer-events-none" />

            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/subjects" element={<Subjects />} />
                    <Route path="/quiz/:id" element={<QuizPage />} />
                </Route>
                <Route path="*" element={<Error />} />
            </Routes>
        </div>
    );
}

export default App;
