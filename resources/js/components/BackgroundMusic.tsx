import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function BackgroundMusic() {
    const audioRef = useRef<HTMLAudioElement>(null);

    const [playing, setPlaying] = useState(false);
    const [volume, setVolume] = useState(0);

    useEffect(() => {
        const audio = audioRef.current;

        if (!audio) return;

        audio.muted = false;
        audio.volume = 0;


        const startMusic = async () => {
            try {
                await audio.play();

                setPlaying(true);
            } catch {
                // Browser blocked autoplay.
            }
        };

        // Try immediately when the website opens.
        startMusic();

        // If autoplay was blocked, start after first interaction.
        const startAfterInteraction = async () => {
            if (audio.paused) {
                try {
                    await audio.play();
                    setPlaying(true);
                } catch {
                    setPlaying(false);
                }
            }
        };

        document.addEventListener('click', startAfterInteraction, {
            once: true,
        });

        return () => {
            document.removeEventListener('click', startAfterInteraction);
        };
    }, []);

    useEffect(() => {
        const audio = audioRef.current;

        if (!audio) return;

        audio.volume = volume / 100;
    }, [volume]);

    const toggleMusic = async () => {
        const audio = audioRef.current;

        if (!audio) return;

        if (playing) {
            audio.pause();
            setPlaying(false);
        } else {
            try {
                await audio.play();
                setPlaying(true);
            } catch {
                setPlaying(false);
            }
        }
    };

    return (
        <>
            <audio
                ref={audioRef}
                src="/audio/background-music.mp3"
                loop
                preload="auto"
                autoPlay
            />

            <div className="fixed right-6 bottom-6 z-50 flex items-center gap-3 rounded-full border border-stone-300 bg-[#f7f3ec]/95 px-3 py-2 shadow-lg backdrop-blur">
                <button
                    type="button"
                    onClick={toggleMusic}
                    className="flex h-10 w-10 items-center justify-center rounded-full text-stone-900 transition hover:bg-stone-900 hover:text-white"
                >
                    {playing ? (
                        <Volume2 size={19} />
                    ) : (
                        <VolumeX size={19} />
                    )}
                </button>

                <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={(event) =>
                        setVolume(Number(event.target.value))
                    }
                    className="w-24 cursor-pointer"
                />

                <span className="w-9 text-right text-xs text-stone-500">
                    {volume}%
                </span>
            </div>
        </>
    );
}
