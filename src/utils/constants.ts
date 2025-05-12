import {
    BarChart,
    BookOpen,
    Brain,
    Calculator,
    Code,
    FlaskConical,
    HeartPulse,
    Landmark,
    Languages,
    PiggyBank,
    Users,
    Zap,
} from 'lucide-react';
export const subjects = [
    {
        name: 'Math',
        icon: Calculator,
        color: 'from-orange-400 to-yellow-300',
        link: 'math',
    },
    {
        name: 'Science',
        icon: FlaskConical,
        color: 'from-green-400 to-emerald-500',
        link: 'science',
    },
    {
        name: 'Language Arts',
        icon: Languages,
        color: 'from-blue-400 to-indigo-500',
        link: 'language-arts',
    },
    {
        name: 'History',
        icon: Landmark,
        color: 'from-red-400 to-rose-500',
        link: 'history',
    },
    {
        name: 'Health',
        icon: HeartPulse,
        color: 'from-pink-400 to-fuchsia-500',
        link: 'health',
    },
    {
        name: 'Economics',
        icon: PiggyBank,
        color: 'from-amber-400 to-yellow-500',
        link: 'economics',
    },
    {
        name: 'Social Studies',
        icon: BookOpen,
        color: 'from-sky-400 to-cyan-500',
        link: 'social-studies',
    },
    {
        name: 'Logic & Thinking',
        icon: Brain,
        color: 'from-purple-400 to-violet-500',
        link: 'logic-and-thinking',
    },
];

export const featureCards = [
    {
        title: 'Banana-Powered Learning',
        description: 'Go bananas solving challenges that sharpen your brain.',
        icon: Brain,
        color: 'banana',
    },
    {
        title: 'Monkey-Smart Practice',
        description:
            'Each quiz is designed to tickle your brain and teach you something new.',
        icon: BookOpen,
        color: 'banana',
    },
    {
        title: 'Unlock Monkey Achievements',
        description: 'Earn badges and bananas as you climb the brainy jungle.',
        icon: Zap,
        color: 'banana',
    },
];

export const benefits = [
    {
        title: 'Fast & Fun Learning',
        description: 'Master topics with quick, enjoyable quizzes.',
        icon: Zap,
    },
    {
        title: 'Monkey-Savvy Skills',
        description: 'Get smarter with every banana you earn.',
        icon: Users,
    },
    {
        title: 'Instant Feedback',
        description: 'See your results as fast as a monkey can blink.',
        icon: Code,
    },
    {
        title: 'Track Your Jungle Journey',
        description: 'Climb the leaderboard and track your progress.',
        icon: BarChart,
    },
];

export const testimonials = [
    {
        name: 'Alex Johnson',
        role: 'Senior Developer at TechCorp',
        quote: 'Banana Brains made learning Redis and more feel like a game. It’s a brilliant twist on education!',
    },
    {
        name: 'Samantha Lee',
        role: 'CTO at StartupX',
        quote: 'From jungle jokes to brainy questions — our team had fun and learned fast. We love it.',
    },
    {
        name: 'Raj Chen',
        role: 'Software Engineer',
        quote: 'I thought it was just a quiz app… but Banana Brains helped me level up way quicker than I expected.',
    },
];
