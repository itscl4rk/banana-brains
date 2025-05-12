import React from 'react';
import { Banana, Flame } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

type QuizNavbarProps = {
    streak: number;
};

const getStreakColor = (streak: number) => {
    if (streak >= 10) return 'text-lime';
    if (streak >= 5) return 'text-banana';
    if (streak > 0) return 'text-orange-400';
    return 'text-cloud/50';
};

const QuizNavbar: React.FC<QuizNavbarProps> = ({ streak }) => {
    return (
        <div className="w-full bg-onyx border-b border-cloud/20 py-4 px-6 flex items-center justify-between">
            <Link
                to="/"
                aria-label="Go back to home"
                className="md:text-2xl text-xl font-semibold text-banana tracking-wide hover:underline"
            >
                <span className="inline-flex items-center gap-2">
                    <Banana className="w-5 h-5" /> Home
                </span>
            </Link>

            <div className="flex items-center gap-2">
                <Flame className={cn('w-6 h-6', getStreakColor(streak))} />
                <span
                    className={cn(
                        'text-lg font-semibold',
                        getStreakColor(streak)
                    )}
                >
                    {streak}
                </span>
            </div>
        </div>
    );
};

export default QuizNavbar;
