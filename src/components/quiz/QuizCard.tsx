import { useEffect } from 'react';
import wrong from '/sound/wrong.mp3';
import correct from '/sound/correct.mp3';
import { motion } from 'framer-motion';

type QuizCardProps = {
    question: string;
    options: string[];
    selectedAnswer: string | null;
    isSubmitted: boolean;
    correctAnswer: string;
    onAnswerClick: (option: string) => void;
    questionIndex: number;
    totalQuestions: number;
};

const QuizCard = ({
    questionIndex,
    totalQuestions,
    question,
    options,
    selectedAnswer,
    isSubmitted,
    correctAnswer,
    onAnswerClick,
}: QuizCardProps) => {
    // Play sound for correct or wrong answer
    useEffect(() => {
        if (isSubmitted && selectedAnswer) {
            const isCorrect = selectedAnswer === correctAnswer;
            const audio = new Audio(isCorrect ? correct : wrong);
            audio.play();
        }
    }, [isSubmitted, selectedAnswer, correctAnswer]);

    // Shake animation for wrong answer
    const shakeAnimation = {
        animate:
            isSubmitted && selectedAnswer !== correctAnswer
                ? { x: [0, -10, 10, -10, 10, 0] }
                : {},
        transition: { duration: 0.5, ease: 'easeInOut' },
    };

    return (
        <motion.div className="p-6 rounded-lg shadow-lg" {...shakeAnimation}>
            <div className="mb-2 inline-block bg-cloud/10 text-sm px-3 py-1 rounded-full text-cloud">
                {questionIndex + 1} / {totalQuestions}
            </div>
            <h2 className="text-2xl font-bold mb-6">{question}</h2>
            <div className="grid gap-4">
                {['A', 'B', 'C', 'D'].map((option, idx) => {
                    const label = options[idx];
                    const isSelected = selectedAnswer === option;
                    const isAnswerCorrect =
                        isSubmitted && option === correctAnswer;
                    const isAnswerWrong =
                        isSubmitted && isSelected && option !== correctAnswer;

                    return (
                        <motion.button
                            key={option}
                            className={`w-full px-4 py-3 rounded-md text-left border transition-all duration-200 cursor-pointer
                                ${
                                    isAnswerCorrect
                                        ? 'bg-lime border-lime text-onyx font-bold'
                                        : isAnswerWrong
                                        ? 'bg-red-500/30 border-red-500 text-red-200'
                                        : isSelected
                                        ? 'bg-banana/20 border-banana text-banana'
                                        : 'border-cloud/20 hover:bg-cloud/10'
                                }
                            `}
                            disabled={isSubmitted}
                            onClick={() => onAnswerClick(option)}
                        >
                            <span className="font-mono font-semibold mr-2">
                                {option}.
                            </span>
                            {label}
                        </motion.button>
                    );
                })}
            </div>
        </motion.div>
    );
};

export default QuizCard;
