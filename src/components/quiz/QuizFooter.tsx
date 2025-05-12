import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { FaXmark, FaCheck } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type QuizFooterProps = {
    onSubmit: () => void;
    answerSelected: boolean;
    isSubmitted: boolean;
    isCorrect: boolean | null;
    onNextQuestion: () => void;
};

const FOOTER_HEIGHT = '56px';

const QuizFooter = ({
    onSubmit,
    answerSelected,
    isSubmitted,
    isCorrect,
    onNextQuestion,
}: QuizFooterProps) => {
    const bgColor = isSubmitted
        ? isCorrect
            ? 'bg-lime text-cloud font-bold'
            : 'bg-red-500 text-cloud font-bold'
        : 'bg-onyx';

    const feedbackIcon = isCorrect ? (
        <FaCheck className="size-10" />
    ) : (
        <FaXmark className="size-10" />
    );
    const feedbackText = isCorrect ? 'Correct' : 'Wrong';

    useEffect(() => {
        if (isSubmitted) {
            const timer = setTimeout(() => {
                onNextQuestion();
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [isSubmitted, onNextQuestion]);

    return (
        <div
            className={cn(
                'w-full border-t border-cloud/20 px-4 flex items-center justify-between transition-colors duration-500 relative',
                bgColor
            )}
            style={{ minHeight: FOOTER_HEIGHT, height: FOOTER_HEIGHT }}
        >
            {/* Animated Feedback */}
            <div
                className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 text-lg font-semibold"
                style={{
                    height: FOOTER_HEIGHT,
                    minWidth: '160px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    top: 0,
                }}
            >
                {isSubmitted && isCorrect !== null && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            type: 'spring',
                            stiffness: 300,
                            damping: 20,
                            delay: 0.1,
                        }}
                        className="flex items-center gap-2 font-bold font-header text-4xl"
                    >
                        {feedbackIcon}
                        {feedbackText}
                    </motion.div>
                )}
            </div>

            {/* Button Area */}
            <motion.div
                className="flex items-center gap-4 ml-auto"
                style={{ height: FOOTER_HEIGHT }}
                initial={false}
                animate={{
                    opacity: isSubmitted ? 0 : 1,
                    x: isSubmitted ? 50 : 0,
                }}
                transition={{ duration: 0.3 }}
            >
                {!isSubmitted ? (
                    <>
                        <div className="w-px h-8 bg-cloud/20" />
                        <Button
                            size="lg"
                            className={cn(
                                'font-semibold transition-all duration-200 ease-in-out text-onyx cursor-pointer',
                                answerSelected
                                    ? 'bg-banana hover:bg-lime shadow-md active:translate-y-1'
                                    : 'bg-banana/50 cursor-not-allowed shadow-none'
                            )}
                            onClick={answerSelected ? onSubmit : undefined}
                            disabled={!answerSelected}
                        >
                            Submit
                        </Button>
                    </>
                ) : (
                    <div style={{ width: '120px' }} />
                )}
            </motion.div>
        </div>
    );
};

export default QuizFooter;
