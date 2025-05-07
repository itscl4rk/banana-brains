import { motion } from 'framer-motion';
import { Brain, Banana, Trophy, Users } from 'lucide-react';

const features = [
    {
        icon: <Brain className="w-8 h-8 text-yellow-300" />,
        title: 'Smart & Fun',
        description:
            'Test your knowledge across subjects while having a blast! Perfect for solo play or group challenges.',
    },
    {
        icon: <Trophy className="w-8 h-8 text-yellow-300" />,
        title: 'Compete & Climb',
        description:
            'Earn points, climb leaderboards, and challenge your friends. See how you stack up!',
    },
    {
        icon: <Users className="w-8 h-8 text-yellow-300" />,
        title: 'Play Together',
        description:
            'Multiplayer quiz modes and friendly matchups coming soon! Stay tuned for more fun.',
    },
];

const categories = [
    { name: 'Math', desc: 'Crack the numbers', emoji: '➕' },
    { name: 'History', desc: 'Go back in time', emoji: '🏺' },
    { name: 'Science', desc: 'Get experimental', emoji: '🔬' },
    { name: 'Language', desc: 'Word up!', emoji: '📝' },
];

const reviews = [
    {
        name: 'Monkey Master',
        text: 'I love Banana Brains! It’s so fun and I’m learning a lot at the same time. Plus, the banana theme is hilarious!',
        rating: 5,
    },
    {
        name: 'Quiz King',
        text: 'The leaderboard system is awesome! Keeps me coming back to challenge my friends.',
        rating: 4.5,
    },
    {
        name: 'Brainy Monkey',
        text: 'I enjoy the variety of topics. It’s a great way to challenge myself and have fun with friends.',
        rating: 4,
    },
    {
        name: 'Smarty Pants',
        text: 'Would love to see more multiplayer features soon! But the current setup is already super engaging.',
        rating: 4.5,
    },
];

export default function Home() {
    return (
        <div className="min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 py-12 space-y-20">
                {/* Hero Section */}
                <section className="text-center space-y-6 max-w-3xl mx-auto">
                    <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 3 }}
                        className="flex justify-center"
                    >
                        <Banana className="w-16 h-16 text-yellow-500" />
                    </motion.div>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-600">
                        Banana Brains
                    </h1>
                    <p className="text-lg text-zinc-200">
                        The quiz site that peels back your potential 🍌🧠
                    </p>
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="mt-4 bg-yellow-400 hover:bg-yellow-300 text-zinc-900 font-bold px-8 py-3 rounded-full shadow-md transition"
                    >
                        Start Quizzing
                    </motion.button>
                </section>
                {/* Features Section */}
                <section className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-yellow-600 text-center mb-10">
                        Why Banana Brains?
                    </h2>
                    <div className="grid sm:grid-cols-3 gap-6">
                        {features.map((feature, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="bg-zinc-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition"
                            >
                                <div className="mb-4">{feature.icon}</div>
                                <h3 className="font-semibold text-yellow-400 text-lg mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-zinc-200">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </section>
                {/* Categories Section */}
                <section className="max-w-5xl mx-auto text-center space-y-10">
                    <h2 className="text-3xl font-bold text-yellow-600">
                        Choose Your Topic
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {categories.map((cat, i) => (
                            <motion.button
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                className="bg-zinc-800 rounded-xl p-6 flex flex-col items-center justify-center shadow text-yellow-600 font-semibold"
                            >
                                <div className="text-3xl mb-2">{cat.emoji}</div>
                                <div>{cat.name}</div>
                                <p className="text-xs text-zinc-200 mt-1">
                                    {cat.desc}
                                </p>
                            </motion.button>
                        ))}
                    </div>
                </section>
                {/* CTA Section */}
                <section className="max-w-3xl mx-auto text-center mt-16">
                    <h2 className="text-2xl font-bold text-yellow-600 mb-4">
                        Ready to Test Your Bananas?
                    </h2>
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="bg-yellow-400 hover:bg-yellow-300 text-zinc-900 font-bold px-8 py-3 rounded-full shadow-md transition"
                    >
                        Start Quizzing Now
                    </motion.button>
                </section>
            </div>
        </div>
    );
}
