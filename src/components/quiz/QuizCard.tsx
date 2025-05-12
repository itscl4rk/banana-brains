// src/components/QuizCard.tsx
type QuizCardProps = {
    question: string;
    options: string[];
    selectedAnswer: string | null;
    isSubmitted: boolean;
    correctAnswer: string;
    onAnswerClick: (option: string) => void;
};

const QuizCard = ({
    question,
    options,
    selectedAnswer,
    isSubmitted,
    correctAnswer,
    onAnswerClick,
}: QuizCardProps) => {
    return (
        <div>
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
                        <button
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
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default QuizCard;
