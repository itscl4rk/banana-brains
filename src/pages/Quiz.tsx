import { useState } from 'react';
import QuizFooter from '@/components/quiz/QuizFooter';
import QuizNavbar from '@/components/quiz/QuizNavbar';
import QuizCard from '@/components/quiz/QuizCard';
import EndPage from '@/components/quiz/EndPage';

const Quiz = () => {
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [streak, setStreak] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [quizEnded, setQuizEnded] = useState(false); // <-- new
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const questions = [
        {
            question: 'What’s the capital of France?',
            options: ['Berlin', 'Paris', 'Madrid', 'Rome'],
            correctAnswer: 'B',
        },
        {
            question: 'What’s the largest planet in our solar system?',
            options: ['Earth', 'Jupiter', 'Mars', 'Saturn'],
            correctAnswer: 'B',
        },
    ];
    const percentCorrect = quizEnded
        ? Math.round((correctAnswers / questions.length) * 100)
        : 0;

    const currentQuestion = questions[currentQuestionIndex];

    const handleSubmit = () => {
        if (selectedAnswer) {
            const correct = selectedAnswer === currentQuestion.correctAnswer;
            setIsCorrect(correct);
            setCorrectAnswers((prev) => (correct ? prev + 1 : prev));
            setIsSubmitted(true);
            setStreak((prev) => (correct ? prev + 1 : 0));
        }
    };

    const handleAnswerClick = (option: string) => {
        if (!isSubmitted) {
            setSelectedAnswer(option);
        }
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex + 1 < questions.length) {
            setCurrentQuestionIndex((prev) => prev + 1);
            setIsSubmitted(false);
            setSelectedAnswer(null);
            setIsCorrect(null);
        } else {
            setQuizEnded(true); // <-- quiz ends here
        }
    };

    const handleRestart = () => {
        setCurrentQuestionIndex(0);
        setSelectedAnswer(null);
        setIsSubmitted(false);
        setIsCorrect(null);
        setCorrectAnswers(0);
        setStreak(0);
        setQuizEnded(false); // <-- reset
    };

    return (
        <div className="flex flex-col min-h-screen bg-onyx text-cloud">
            <QuizNavbar streak={streak} />

            <main className="flex-1 mt-24 px-6 py-8 max-w-3xl mx-auto w-full">
                {quizEnded ? (
                    <EndPage
                        onRestart={handleRestart}
                        percentCorrect={percentCorrect}
                    />
                ) : currentQuestion ? (
                    <QuizCard
                        question={currentQuestion.question}
                        options={currentQuestion.options}
                        selectedAnswer={selectedAnswer}
                        isSubmitted={isSubmitted}
                        correctAnswer={currentQuestion.correctAnswer}
                        onAnswerClick={handleAnswerClick}
                    />
                ) : (
                    <h2 className="text-2xl font-bold mb-6">
                        Questions not found?
                    </h2>
                )}
            </main>

            {!quizEnded && (
                <QuizFooter
                    onSubmit={handleSubmit}
                    answerSelected={!!selectedAnswer}
                    isSubmitted={isSubmitted}
                    isCorrect={isCorrect}
                    onNextQuestion={handleNextQuestion}
                />
            )}
        </div>
    );
};

export default Quiz;
