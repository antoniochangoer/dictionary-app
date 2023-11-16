import { useRef, useState } from 'react';
import { PlayIcon, PauseIcon } from '@heroicons/react/20/solid';

export default function Audio({ audio }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();

  return (
    <>
      <button
        type="button"
        className="h-12 w-12 md:h-[75px] md:w-[75px] bg-purple-200 dark:bg-[#2D153F] rounded-full flex items-center justify-center group hover:bg-brand-main transition-colors"
        onClick={() => {
          if (isPlaying) {
            audioRef.current.pause();
          } else {
            audioRef.current.play();
          }

          setIsPlaying(!isPlaying);
        }}
      >
        {isPlaying ? (
          <PauseIcon className="h-4 w-4 md:h-5 md:w-5 text-brand-main group-hover:text-white" />
        ) : (
          <PlayIcon className="h-4 w-4 md:h-5 md:w-5 text-brand-main group-hover:text-white" />
        )}
        <span className="sr-only">Toggle play</span>
      </button>
      <audio ref={audioRef} src={audio} onEnded={() => setIsPlaying(false)} />
    </>
  );
}
