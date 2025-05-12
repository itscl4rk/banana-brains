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
        <div className="w-full bg-onyx py-4 px-6 flex items-center justify-center">
            <div className="flex items-center gap-1 bg-zinc-300/10 rounded-lg h-10 w-14 justify-center">
                <Flame className={cn('w-6 h-6', getStreakColor(streak))} />
                <span
                    className={cn(
                        'text-xl font-semibold',
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
