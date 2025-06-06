import { Banana } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="text-cloud/80 py-12 px-4 mt-auto">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <Link
                            className="text-2xl font-bold text-cloud flex items-center max-w-fit mx-auto md:mx-0"
                            to="/"
                        >
                            <span className="text-banana">Banana Brains</span>
                            <Banana className="w-6 h-6 text-banana ml-3" />
                        </Link>
                        <p className="text-sm text-cloud/60 mt-2">
                            © {new Date().getFullYear()}
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <motion.a
                            href="https://dub.sh/clark-twitter"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cloud/60 hover:text-cloud transition-colors duration-300"
                            aria-label="Twitter"
                            whileHover={{
                                scale: 1.1,
                                rotate: 10,
                                transition: { type: 'spring', stiffness: 300 },
                            }}
                        >
                            {/* Twitter Icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-twitter size-6"
                            >
                                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                            </svg>
                        </motion.a>
                        <motion.a
                            href="https://github.com/itscl4rk/banana-brains"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cloud/60 hover:text-cloud transition-colors duration-300"
                            aria-label="GitHub"
                            whileHover={{
                                scale: 1.1,
                                rotate: -10,
                                transition: { type: 'spring', stiffness: 300 },
                            }}
                        >
                            {/* GitHub Icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-github size-6"
                            >
                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                <path d="M9 18c-4.51 2-5-2-7-2" />
                            </svg>
                        </motion.a>
                        <motion.a
                            href="https://www.youtube.com/@monkeymentoryt?sub_confirmation=1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cloud/60 hover:text-cloud transition-colors duration-300"
                            aria-label="YouTube"
                            whileHover={{
                                scale: 1.1,
                                rotate: -10,
                                transition: { type: 'spring', stiffness: 300 },
                            }}
                        >
                            {/* YouTube Icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-youtube size-6"
                            >
                                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                                <path d="m10 15 5-3-5-3z" />
                            </svg>
                        </motion.a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
