import Audio from './Audio';

export default function ResultHeader({ word, phonetic, phonetics }) {
  const foundAdio = phonetics.find((phonetic) => phonetic.audio);
  return (
    <>
      <header className="flex justify-between items-center">
        <div>
          <h1 className="font-bold text-[2rem] md:text-6xl mb-2">{word}</h1>
          <small className="text-brand-main text-lg">{phonetic}</small>
        </div>
        {/* if there is audio render the audio button */}
        {foundAdio ? <Audio audio={foundAdio.audio} /> : null}
      </header>
    </>
  );
}
