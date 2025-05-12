import { Link, useNavigate } from 'react-router-dom';
import { Banana, Github, Star } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const Navbar = () => {
    const navigate = useNavigate();
    const [hovered, setHovered] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <nav className="fixed top-0 z-50 bg-onyx/60 backdrop-blur-md border-b border-banana w-full shadow-sm">
            <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
                {/* Logo */}
                <Link
                    to="/"
                    className="md:text-2xl text-xl font-semibold text-banana tracking-wide"
                >
                    <span className="inline-flex items-center gap-2">
                        Banana Brains <Banana className="w-6 h-6 text-banana" />
                        <span className="bg-gradient-to-r from-banana to-avocado text-onyx text-[10px] font-bold px-1.5 py-0.5 mt-1.5 rounded uppercase">
                            beta
                        </span>
                    </span>
                </Link>

                {/* Desktop Nav Items */}
                <div className="hidden md:flex items-center gap-4">
                    <button
                        onClick={() => navigate('/subjects')}
                        className="cursor-pointer text-sm font-medium text-cloud hover:bg-banana/50 transition-colors px-4 py-2 rounded-md"
                    >
                        Subjects
                    </button>
                    <motion.a
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        href="https://github.com/itscl4rk/banana-brains"
                        target="_blank"
                        className="cursor-pointer relative flex items-center gap-2 bg-gradient-to-r from-banana to-avocado rounded-md px-4 pr-16 py-2"
                    >
                        <Github className="w-4 h-4 text-onyx" />
                        <span className="font-semibold text-onyx">Star me</span>
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
                                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-avocado/30 py-1 px-2 rounded-full flex items-center shadow"
                                >
                                    <Star className="w-4 h-4 text-banana" />
                                    <span className="text-sm font-bold ml-2 mb-0.5 text-cloud">
                                        :)
                                    </span>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMobileMenu}
                    className="md:hidden flex items-center justify-center p-2 rounded-md text-banana hover:bg-banana/30 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-banana"
                >
                    <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        {isMobileMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Nav Items */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-onyx/90 backdrop-blur-md border-t border-banana w-full shadow-sm"
                    >
                        <button
                            onClick={() => {
                                navigate('/subjects');
                                setIsMobileMenuOpen(false);
                            }}
                            className="block w-full text-left px-6 py-3 text-cloud hover:bg-banana/50 transition-colors"
                        >
                            Subjects
                        </button>
                        <motion.a
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                            href="https://github.com/itscl4rk/banana-brains"
                            target="_blank"
                            className="cursor-pointer relative flex items-center gap-2 bg-gradient-to-r from-banana to-avocado rounded-md p-4 w-[8rem] h-12"
                        >
                            <Github className="w-4 h-4 text-onyx" />
                            <span className="font-semibold text-onyx">
                                Star me
                            </span>
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
                                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-avocado/30 py-1 px-2 rounded-full flex items-center shadow"
                                    >
                                        <Star className="w-4 h-4 text-banana" />
                                        <span className="text-sm font-bold ml-2 mb-0.5 text-cloud">
                                            :)
                                        </span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
