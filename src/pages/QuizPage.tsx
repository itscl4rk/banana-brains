/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import QuizCard from '../components/QuizCard';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Briefcase,
    Landmark,
    Microscope,
    Calculator,
    BookOpen,
    Globe,
    Heart,
    Brain,
    Banana,
} from 'lucide-react';

type QuizQuestion = {
    title: string;
    question: string;
    number: number;
    answers: string[];
    correct: string;
    explanation: string;
    hint: string;
};

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

const QuizPage = () => {
    const { id } = useParams();
    const [questions, setQuestions] = useState<QuizQuestion[] | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [correctCount, setCorrectCount] = useState(0);
    const [error, setError] = useState<string | null>(null);
    const [reloadTrigger, setReloadTrigger] = useState(0);
    const navigate = useNavigate();

    const resetQuiz = () => {
        setQuestions(null);
        setCurrentIndex(0);
        setCorrectCount(0);
        setError(null);
        setReloadTrigger((prev) => prev + 1);
    };

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const res = await fetch(`/data/${id}.json`);
                if (!res.ok) throw new Error('Quiz not found');
                const data = await res.json();
                if (!Array.isArray(data))
                    throw new Error('Invalid quiz format');
                setQuestions(data);
                setCurrentIndex(0);
                setCorrectCount(0);
            } catch (err: any) {
                console.error('Error loading quiz:', err);
                setError('Failed to load quiz data.');
            }
        };
        fetchQuestions();
    }, [id, reloadTrigger]);

    const handleAnswer = (isCorrect: boolean) => {
        if (isCorrect) setCorrectCount((prev) => prev + 1);
    };

    const handleNext = () => {
        if (!questions) return;
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(-1);
        }
    };

    if (error) {
        return <div className="text-center text-red-500 p-4">{error}</div>;
    }

    if (!questions) {
        return (
            <div className="text-center text-yellow-400 p-4">
                Loading quiz...
            </div>
        );
    }

    const percent = Math.round((correctCount / questions.length) * 100);

    return (
        <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-zinc-800 p-6 flex flex-col items-center justify-start pt-24 text-white">
            <AnimatePresence mode="wait">
                {currentIndex === -1 ? (
                    <motion.div
                        key="quiz-complete"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -40 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className="text-center max-w-2xl w-full mt-40"
                    >
                        <h2 className="text-3xl font-bold text-yellow-400 mb-6 drop-shadow-md">
                            🎉 Quiz Complete!
                        </h2>
                        <p className="text-zinc-300 text-lg mb-2">
                            You got{' '}
                            <span className="font-semibold text-yellow-400">
                                {correctCount}
                            </span>{' '}
                            out of{' '}
                            <span className="font-semibold text-yellow-400">
                                {questions.length}
                            </span>{' '}
                            correct.
                        </p>
                        <p
                            className={`${
                                percent >= 75
                                    ? 'text-green-400'
                                    : 'text-red-400'
                            } text-4xl font-bold mb-6`}
                        >
                            {percent}%
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate('/')}
                            className="cursor-pointer inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-zinc-900 font-bold px-8 py-4 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400 mb-4"
                        >
                            <Banana className="w-6 h-6" />
                            Return Home
                        </motion.button>

                        {percent >= 75 ? (
                            <>
                                <motion.p
                                    initial={{ scale: 0.8 }}
                                    animate={{ scale: 1 }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 300,
                                        damping: 20,
                                    }}
                                    className="text-green-400 text-xl mt-6"
                                >
                                    You passed the quiz!
                                </motion.p>
                            </>
                        ) : (
                            <>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={resetQuiz}
                                        className="mt-4 cursor-pointer px-6 py-3 bg-zinc-700 hover:bg-zinc-600 text-yellow-400 rounded-full font-bold transition-colors duration-200"
                                    >
                                        Retake?
                                    </motion.button>
                                </motion.div>
                            </>
                        )}
                    </motion.div>
                ) : (
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                        className="w-full max-w-3xl"
                    >
                        <QuizCard
                            {...questions[currentIndex]}
                            onNext={handleNext}
                            onAnswer={handleAnswer}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default QuizPage;
