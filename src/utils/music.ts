// src/lib/music.ts
let audio: HTMLAudioElement | null = null;

export const initMusic = (src: string) => {
    if (!audio) {
        audio = new Audio(src);
        audio.loop = true;
        audio.volume = 0.3;
    }
};

export const playMusic = () => {
    audio?.play().catch((err) => {
        console.warn('Autoplay blocked:', err);
    });
};

export const pauseMusic = () => {
    audio?.pause();
};

export const setVolume = (value: number) => {
    if (audio) audio.volume = value;
};

export const getVolume = (): number => {
    return audio?.volume ?? 0;
};

export const isPlaying = (): boolean => {
    return !!audio && !audio.paused;
};
