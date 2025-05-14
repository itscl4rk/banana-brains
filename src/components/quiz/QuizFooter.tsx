import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { FaXmark, FaCheck } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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

    const navigate = useNavigate();

    return (
        <div
            className={cn(
                'w-full border-t border-cloud/20 px-4 flex items-center justify-between transition-colors duration-500 relative',
                bgColor
            )}
            style={{ minHeight: FOOTER_HEIGHT, height: FOOTER_HEIGHT }}
        >
            {/* Animated Feedback in Center */}
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

            {/* Buttons Section */}
            <motion.div
                className="flex items-center gap-4 w-full"
                style={{ height: FOOTER_HEIGHT }}
                initial={false}
                animate={{
                    opacity: isSubmitted ? 0 : 1,
                    x: isSubmitted ? 50 : 0,
                }}
                transition={{ duration: 0.3 }}
            >
                {!isSubmitted ? (
                    <div className="flex justify-between items-center gap-4 w-full">
                        {/* Home Button on Left */}
                        <Button
                            size="lg"
                            className={cn(
                                'font-semibold transition-all duration-200 ease-in-out text-onyx cursor-pointer bg-avocado/60 hover:bg-avocado/100'
                            )}
                            onClick={() => navigate('/')}
                        >
                            <Home className="size-5" />
                            Home
                        </Button>

                        {/* Vertical Divider */}

                        {/* Submit Button on Right */}
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
                    </div>
                ) : (
                    <div className="w-[120px]" />
                )}
            </motion.div>
        </div>
    );
};

export default QuizFooter;
