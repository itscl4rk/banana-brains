import { motion } from 'framer-motion';
import SubjectCards from '@/components/SubjectCards';

const Subjects = () => {
    return (
        <div className="text-cloud">
            <main className="container mx-auto px-4 pt-16 max-w-7xl">
                <motion.h1
                    className="text-5xl font-extrabold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-banana to-lime"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    Choose a Subject
                </motion.h1>

                <motion.p
                    className="text-xl text-center max-w-2xl mx-auto mb-12 text-cloud"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    Tap into your inner monkey and master topics one banana at a
                    time!
                </motion.p>

                <SubjectCards />
            </main>
        </div>
    );
};
export default Subjects;
