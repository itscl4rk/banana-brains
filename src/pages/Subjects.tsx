import { motion } from 'framer-motion';
import {
    BookOpen,
    Microscope,
    Landmark,
    Calculator,
    Brain,
    Globe,
    Heart,
    Briefcase,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const subjects = [
    {
        name: 'Economics',
        icon: <Briefcase className="w-6 h-6" />,
        link: '/quiz/economics',
    },
    {
        name: 'History',
        icon: <Landmark className="w-6 h-6" />,
        link: '/quiz/history',
    },
    {
        name: 'Science',
        icon: <Microscope className="w-6 h-6" />,
        link: '/quiz/science',
    },
    {
        name: 'Math',
        icon: <Calculator className="w-6 h-6" />,
        link: '/quiz/math',
    },
    {
        name: 'Language Arts',
        icon: <BookOpen className="w-6 h-6" />,
        link: '/quiz/language_arts',
    },
    {
        name: 'Social Studies',
        icon: <Globe className="w-6 h-6" />,
        link: '/quiz/social_studies',
    },
    {
        name: 'Health',
        icon: <Heart className="w-6 h-6" />,
        link: '/quiz/health',
    },
    {
        name: 'Philosophy',
        icon: <Brain className="w-6 h-6" />,
        link: '/quiz/philosophy',
    },
];

const Subjects = () => {
    return (
        <div className="h-calc(100vh-18) px-6 py-12">
            <h1 className="text-3xl font-bold text-yellow-400 text-center mb-10">
                Explore Subjects
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {subjects.map((subject, idx) => (
                    <Link to={subject.link} key={idx}>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            className="bg-zinc-800 border border-yellow-500 rounded-xl p-5 flex flex-col items-center justify-center shadow-md transition"
                        >
                            <div className="text-yellow-400 mb-3">
                                {subject.icon}
                            </div>
                            <h2 className="text-lg font-semibold text-center">
                                {subject.name}
                            </h2>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Subjects;
