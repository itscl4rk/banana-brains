// components/EndPage.tsx
import { Button } from '@/components/ui/button';

const EndPage = ({
    onRestart,
    percentCorrect,
}: {
    onRestart: () => void;
    percentCorrect: number;
}) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[40vh] space-y-8 bg-gradient-to-br from-onyx via-cloud/10 to-banana/10 rounded-xl shadow-xl p-10">
            <div className="flex flex-col items-center space-y-2">
                <span className="text-5xl">🎉</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-banana drop-shadow">
                    Quiz Completed!
                </h2>
            </div>
            <div className="flex flex-col items-center space-y-4">
                <div className="flex items-center space-x-3">
                    <span className="text-lg text-cloud">Your Score:</span>
                    <span className="text-4xl font-mono font-bold text-lime drop-shadow">
                        {percentCorrect}%
                    </span>
                </div>
                <Button
                    onClick={onRestart}
                    className="mt-2 px-8 py-3 rounded-full bg-banana hover:bg-lime text-onyx font-semibold shadow-lg transition-all duration-200 cursor-pointer"
                >
                    Try Again
                </Button>
            </div>
        </div>
    );
};

export default EndPage;
