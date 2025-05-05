/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import QuizCard from '../components/QuizCard';

type QuizQuestion = {
    title: string;
    question: string;
    number: number;
    answers: string[];
    correct: string;
    explanation: string;
    hint: string;
};

const QuizPage = () => {
    const { id } = useParams(); // e.g., 'history', 'math'
    const [questions, setQuestions] = useState<QuizQuestion[] | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const res = await fetch(`/data/${id}.json`);
                if (!res.ok) throw new Error('Quiz not found');

                const data = await res.json();
                console.log('Fetched data:', data);

                // Optional: check format
                if (!Array.isArray(data))
                    throw new Error('Invalid quiz format');

                setQuestions(data);
                setCurrentIndex(0);
            } catch (err: any) {
                console.error('Error loading quiz:', err);
                setError('Failed to load quiz data.');
            }
        };

        fetchQuestions();
    }, [id]);

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

    return (
        <div className="h-calc(100vh-18) mt-55 text-white p-6 flex items-center justify-center">
            {currentIndex === -1 ? (
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-yellow-400 mb-2">
                        Quiz Complete!
                    </h2>
                    <p className="text-zinc-300">
                        You’ve answered all the questions. 🎉
                    </p>
                </div>
            ) : (
                <QuizCard
                    key={currentIndex}
                    {...questions[currentIndex]}
                    onNext={handleNext}
                />
            )}
        </div>
    );
};

export default QuizPage;
