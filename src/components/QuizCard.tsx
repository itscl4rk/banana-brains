import { useState } from 'react';
import { CheckCircle, XCircle, Lightbulb, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

type QuizProps = {
    title: string;
    question: string;
    number: number;
    answers: string[];
    correct: string;
    explanation: string;
    hint: string;
    onNext?: () => void;
    onAnswer?: (isCorrect: boolean) => void; // ← New
};

const QuizCard = ({
    title,
    question,
    number,
    answers,
    correct,
    explanation,
    hint,
    onNext,
    onAnswer,
}: QuizProps) => {
    const [selected, setSelected] = useState<string | null>(null);
    const [showHint, setShowHint] = useState(false);

    const isCorrect = selected === correct;

    return (
        <div className="bg-zinc-800 border-2 border-yellow-500 rounded-xl  p-6 shadow-lg text-zinc-100 max-w-xl mx-auto">
            <h3 className="text-yellow-400 text-sm uppercase font-semibold mb-2">
                Question {number}: {title}
            </h3>
            <p className="text-lg font-medium mb-4">{question}</p>

            <div className="grid gap-3 mb-4">
                {answers.map((answer, idx) => {
                    const isSelected = selected === answer;
                    const isAnswerCorrect = answer === correct;

                    let bgClass = 'bg-zinc-700';
                    if (selected) {
                        if (isSelected && isAnswerCorrect)
                            bgClass = 'bg-green-600';
                        else if (isSelected && !isAnswerCorrect)
                            bgClass = 'bg-red-600';
                        else if (isAnswerCorrect) bgClass = 'bg-green-700/70';
                    }

                    return (
                        <motion.button
                            key={idx}
                            onClick={() => {
                                setSelected(answer);
                                if (!selected && onAnswer) {
                                    onAnswer(answer === correct);
                                }
                            }}
                            disabled={!!selected}
                            whileTap={{ scale: 0.98 }}
                            className={`cursor-pointer w-full text-left px-4 py-2 rounded-md transition-colors duration-200 ${bgClass}  ${
                                isSelected
                                    ? 'font-semibold'
                                    : 'hover:bg-zinc-600'
                            }`}
                        >
                            {answer}
                        </motion.button>
                    );
                })}
            </div>

            {!selected && (
                <button
                    onClick={() => setShowHint(!showHint)}
                    className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 mb-2 text-sm"
                >
                    <Lightbulb className="w-4 h-4" />
                    Hint
                </button>
            )}

            {showHint && !selected && (
                <p className="text-zinc-400 italic mb-2">{hint}</p>
            )}

            {selected && (
                <>
                    <div className="mt-4">
                        {isCorrect ? (
                            <div className="flex items-center text-green-400 gap-2 mb-2">
                                <CheckCircle className="w-5 h-5" />
                                Correct!
                            </div>
                        ) : (
                            <div className="flex items-center text-red-400 gap-2 mb-2">
                                <XCircle className="w-5 h-5" />
                                Incorrect.
                            </div>
                        )}
                        <p className="text-zinc-300">{explanation}</p>
                    </div>

                    <motion.button
                        onClick={onNext}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="cursor-pointer mt-6 bg-yellow-500 text-zinc-900 font-semibold py-2 px-4 rounded-md flex items-center gap-2"
                    >
                        Next
                        <ArrowRight className="w-4 h-4" />
                    </motion.button>
                </>
            )}
        </div>
    );
};

export default QuizCard;
