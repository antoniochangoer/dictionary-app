import Noun from './Noun';
import Verb from './Verb';

export default function ResultBody({
  meanings,
  setSearchWord,
  searchForMeaning,
}) {
  // unpack meanings array and set default value if nothing is there
  const [noun = null, verb = null] = meanings;

  // If something else is found other then noun/verb show this and fix a component for it
  if (noun?.partOfSpeech !== 'noun' && verb?.partOfSpeech !== 'verb') {
    return (
      <div>
        <p className="text-4xl py-6">
          Need some extra work to render other speech variants then noun/verb
          <i> sorry</i>.<br />{' '}
          <span className="inline-block text-brand-main mt-4 text-2xl">
            For further reading use the link below...
          </span>
        </p>
      </div>
    );
  }

  return (
    <>
      {noun?.partOfSpeech === 'noun' && (
        <Noun
          result={noun}
          setSearchWord={setSearchWord}
          searchForMeaning={searchForMeaning}
        />
      )}
      {verb?.partOfSpeech === 'verb' && <Verb result={verb} />}
    </>
  );
}
