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
        <div className="flex flex-col items-center justify-center min-h-[40vh] px-4 py-10 sm:py-16 bg-gradient-to-br from-onyx via-cloud/10 to-banana/10 rounded-3xl shadow-2xl border-4 border-transparent bg-clip-padding relative overflow-hidden animate-fade-in">
            {/* Confetti SVG */}
            <svg
                className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
                viewBox="0 0 400 200"
            >
                <circle cx="50" cy="50" r="6" fill="#FDE68A" />
                <circle cx="350" cy="70" r="4" fill="#A3E635" />
                <circle cx="200" cy="150" r="5" fill="#FDE68A" />
                <circle cx="100" cy="120" r="3" fill="#A3E635" />
                <circle cx="300" cy="180" r="4" fill="#FDE68A" />
            </svg>

            <div className="flex flex-col items-center space-y-2 z-10">
                <span className="text-6xl animate-bounce drop-shadow-lg">
                    🎉
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-banana drop-shadow-lg tracking-tight">
                    Quiz Completed!
                </h2>
            </div>

            <div className="flex flex-col items-center space-y-6 mt-6 z-10">
                <div className="flex items-center space-x-3">
                    <span className="text-lg text-cloud font-medium">
                        Your Score:
                    </span>
                    <span className="text-5xl font-mono font-extrabold text-lime drop-shadow-lg animate-fade-in-up">
                        {percentCorrect}%
                    </span>
                </div>
                <Button
                    onClick={onRestart}
                    className="mt-2 px-10 py-4 rounded-full bg-banana hover:bg-lime text-onyx font-semibold shadow-xl transition-all duration-200 cursor-pointer text-lg ring-2 ring-banana hover:ring-lime focus:ring-lime focus:outline-none"
                >
                    Try Again
                </Button>
            </div>
        </div>
    );
};

export default EndPage;
