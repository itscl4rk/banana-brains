import { Link } from 'react-router-dom';
import { Banana } from 'lucide-react'; // Optional fun icon
import { motion } from 'framer-motion';

const Error = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center px-4">
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 120 }}
                className="text-center mb-32"
            >
                <img src="/monkey.png" className="size-46 mx-auto" />
                <div className="text-banana text-6xl font-extrabold mb-4">
                    404
                </div>
                <h1 className="text-2xl md:text-3xl font-semibold mb-2">
                    Uh oh! Lost in the jungle?
                </h1>
                <p className="text-zinc-400 mb-6 max-w-md mx-auto">
                    The page you're swinging to doesn't exist. Maybe you took a
                    wrong vine?
                </p>
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 bg-banana text-zinc-900 font-bold px-6 py-3 rounded-full shadow hover:bg-banana/80 transition"
                >
                    <Banana className="w-5 h-5" />
                    Return Home
                </Link>
            </motion.div>
        </div>
    );
};
export default Error;
