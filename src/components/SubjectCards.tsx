import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { subjects } from '@/utils/constants';
import Glow from './decorators/Glow';

const SubjectCards = () => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {subjects.map(({ name, icon: Icon, color, link }) => (
                    <motion.div
                        key={name}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <Link to={`/quiz/${link}`}>
                            <div
                                className={cn(
                                    'rounded-2xl p-6 flex flex-col items-center text-center shadow-lg transition-all hover:shadow-2xl',
                                    'bg-gradient-to-br text-onyx font-bold',
                                    color
                                )}
                            >
                                <Icon size={40} className="mb-4" />
                                <span className="text-xl">{name}</span>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
            <Glow />
        </>
    );
};

export default SubjectCards;
