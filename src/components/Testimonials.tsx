import { testimonials } from '@/utils/constants';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-32 px-4 relative"
        >
            <h2 className="text-4xl md:text-5xl font-extrabold text-center text-cloud mb-4">
                What Is Our{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-banana to-avocado">
                    Goal
                </span>
                ?
            </h2>
            <p className="text-sky text-center max-w-2xl mx-auto mt-3 mb-14 text-base md:text-lg">
                (To hear these from you soon! 🙌)
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <Card className="bg-cloud/5 border border-cloud/10 backdrop-blur-sm hover:bg-cloud/10 transition-all duration-300 h-full rounded-2xl shadow-lg overflow-hidden">
                            <CardContent className="pt-6 pb-8 px-6 relative h-full flex flex-col">
                                <Quote className="absolute top-5 right-5 w-10 h-10 text-banana/20" />

                                <div className="flex items-center mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-5 h-5 text-banana fill-banana"
                                        />
                                    ))}
                                </div>

                                <p className="text-cloud mb-6 italic flex-grow">
                                    "{testimonial.quote}"
                                </p>

                                <div className="flex items-center mt-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-banana to-avocado flex items-center justify-center text-onyx font-bold text-lg shadow-md">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-cloud font-semibold">
                                            {testimonial.name}
                                        </p>
                                        <p className="text-sky text-sm">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Testimonials;
