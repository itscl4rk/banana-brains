import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
    getVolume,
    isPlaying,
    playMusic,
    pauseMusic,
    setVolume,
} from '@/utils/music';
import { Button } from '@/components/ui/button';
import {
    SpeakerWaveIcon,
    SpeakerXMarkIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline';
import { SettingsIcon } from 'lucide-react';

type Props = {
    onClose: () => void;
};

const SettingsOverlay = ({ onClose }: Props) => {
    const [volume, setVol] = useState(0.3);
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        setVol(getVolume());
        setPlaying(isPlaying());
    }, []);

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVol = parseFloat(e.target.value);
        setVol(newVol);
        setVolume(newVol);
    };

    const toggleMusic = () => {
        if (isPlaying()) {
            pauseMusic();
            setPlaying(false);
        } else {
            playMusic();
            setPlaying(true);
        }
    };

    return (
        <motion.div
            className="fixed inset-0 bg-onyx/90 backdrop-blur-lg z-50 flex justify-center items-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                className="bg-gradient-to-br from-onyx via-onyx/90 to-cloud/5 border-2 border-cloud/10 rounded-2xl shadow-2xl w-full max-w-md relative overflow-hidden"
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-cloud/10 transition-colors cursor-pointer group"
                >
                    <XMarkIcon className="w-6 h-6 text-cloud/60 group-hover:text-cloud" />
                </button>

                <div className="p-6 pt-12">
                    <div className="flex items-center gap-3 mb-8">
                        <SettingsIcon className="w-8 h-8 text-banana" />
                        <h2 className="text-2xl font-bold text-cloud">
                            Settings
                        </h2>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <SpeakerWaveIcon className="w-5 h-5 text-lime" />
                                    <span className="font-semibold text-cloud">
                                        Volume
                                    </span>
                                </div>
                                <span className="font-mono text-lime">
                                    {Math.round(volume * 100)}%
                                </span>
                            </div>

                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.01"
                                value={volume}
                                onChange={handleVolumeChange}
                                className="w-full h-2 rounded-lg appearance-none cursor-pointer my-slider"
                            />
                        </div>

                        <motion.div whileTap={{ scale: 0.95 }}>
                            <Button
                                onClick={toggleMusic}
                                className="w-full py-6 rounded-xl bg-gradient-to-r from-banana/90 to-lime/80 hover:from-banana hover:to-lime cursor-pointer
                                    text-onyx font-bold text-lg shadow-lg transition-all"
                            >
                                <div className="flex items-center gap-3">
                                    {playing ? (
                                        <>
                                            <SpeakerWaveIcon className="w-6 h-6" />
                                            <span>Pause Music</span>
                                        </>
                                    ) : (
                                        <>
                                            <SpeakerXMarkIcon className="w-6 h-6" />
                                            <span>Play Music</span>
                                        </>
                                    )}
                                </div>
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default SettingsOverlay;
