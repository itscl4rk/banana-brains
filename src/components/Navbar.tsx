import { Link, useNavigate } from 'react-router-dom';
import { Github, Star } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const Navbar = () => {
    const navigate = useNavigate();
    const [hovered, setHovered] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-zinc-800 border-b border-yellow-400 w-full shadow-sm">
            <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
                {/* Logo */}
                <Link
                    to="/"
                    className="text-2xl font-semibold text-yellow-400 tracking-wide"
                >
                    <span className="inline-flex items-center gap-2">
                        Banana Brains
                        <span className="bg-yellow-400 text-zinc-900 text-[10px] font-bold px-1.5 py-0.5 mt-1.5 rounded uppercase">
                            beta
                        </span>
                    </span>
                </Link>

                {/* Nav Items */}
                <div className="flex items-center gap-4">
                    {/* Subjects Button */}
                    <button
                        onClick={() => navigate('/subjects')}
                        className="cursor-pointer text-sm font-medium text-zinc-100 hover:bg-yellow-400/50 transition-colors px-4 py-2 rounded-md"
                    >
                        Subjects
                    </button>

                    {/* Github */}
                    <motion.a
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        href="https://github.com/itscl4rk/banana-brains"
                        target="_blank"
                        className="cursor-pointer relative flex items-center gap-2 bg-yellow-400/70 rounded-md px-4 pr-16 py-2 overflow-hidden"
                    >
                        <Github className="w-4 h-4" />
                        <span className="font-semibold">Star me</span>

                        <AnimatePresence>
                            {hovered && (
                                <motion.div
                                    initial={{ x: 20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: 20, opacity: 0 }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 300,
                                        damping: 20,
                                    }}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-yellow-400/50 py-1 px-2 rounded-full flex items-center shadow"
                                >
                                    <Star className="w-4 h-4 text-yellow-300" />
                                    <span className="text-sm font-bold ml-2 mb-0.5">
                                        :)
                                    </span>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
