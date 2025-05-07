import { useEffect, useRef, useState } from 'react';
import { CheckCircle, XCircle, Lightbulb, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import wrongSound from '/wrong.mp3';
import rightSound from '/correct.mp3';

type QuizProps = {
    title: string;
    question: string;
    number: number;
    answers: string[];
    correct: string;
    explanation: string;
    hint: string;
    onNext?: () => void;
    onAnswer?: (isCorrect: boolean) => void;
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

    const correctAudio = useRef(new Audio(rightSound));
    const wrongAudio = useRef(new Audio(wrongSound));
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const isCorrect = selected === correct;

    const stopAllAudio = () => {
        [correctAudio.current, wrongAudio.current].forEach((audio) => {
            audio.pause();
            audio.currentTime = 0;
        });
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    };

    const playAudio = (type: 'correct' | 'wrong') => {
        stopAllAudio();
        const audio =
            type === 'correct' ? correctAudio.current : wrongAudio.current;
        audioRef.current = audio;
        audio.play();
    };

    const handleNext = () => {
        stopAllAudio();
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        onNext?.();
    };

    // Play sound + auto-advance after 3s
    useEffect(() => {
        if (selected !== null) {
            playAudio(isCorrect ? 'correct' : 'wrong');
            timeoutRef.current = setTimeout(() => {
                handleNext();
            }, 3000);
        }
        // Clean up timeout on unmount or question change
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [selected]);

    // Keyboard: allow "Enter" to go next
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Enter' && selected) {
                handleNext();
            }
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [selected]);

    return (
        <div className="bg-zinc-800 border-2 border-yellow-500 rounded-xl p-6 shadow-lg text-zinc-100 max-w-xl mx-auto">
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

                    const hoverClass = selected ? '' : 'hover:bg-zinc-600';

                    return (
                        <motion.button
                            key={idx}
                            onClick={() => {
                                if (!selected) {
                                    setSelected(answer);
                                    onAnswer?.(answer === correct);
                                }
                            }}
                            disabled={!!selected}
                            whileTap={{ scale: 0.98 }}
                            className={`cursor-pointer w-full text-left px-4 py-2 rounded-md transition-colors duration-200 ${bgClass} ${hoverClass} ${
                                isSelected ? 'font-semibold' : ''
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

            <AnimatePresence>
                {selected && (
                    <motion.div
                        key="feedback"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4"
                    >
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

                        <motion.button
                            onClick={handleNext}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="cursor-pointer mt-6 bg-yellow-500 text-zinc-900 font-semibold py-2 px-4 rounded-md flex items-center gap-2"
                        >
                            Next
                            <ArrowRight className="w-4 h-4" />
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default QuizCard;
