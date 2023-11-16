import Linebreak from './Linebreak';

export default function Noun({ result, setSearchWord, searchForMeaning }) {
  const handleSynonymClick = (synonym) => {
    // send the synonym to parent component and start new search keep both in sync
    setSearchWord(synonym);
    searchForMeaning(synonym);
  };

  return (
    <>
      <Linebreak name={result.partOfSpeech} />
      <p className="text-brand-light-500 pt-8 pb-4 md:text-xl">Meaning</p>
      <ul className="pl-6 pb-6 md:text-lg list-disc list-disc-brand marker:text-brand-main">
        {result.definitions.map((meaning, index) => (
          <li key={index}>{meaning.definition}</li>
        ))}
      </ul>

      {/* split to other component synonms array */}
      {/* EXTRA: make the synonyms clickable to search that as well ? */}
      {/* create ref and if clicked read textContent and pass trough to use as keyword for parent component */}
      {/* IF NO synoyms dont render the word synoynms */}
      <div className="md:text-xl">
        {result.synonyms.length > 0 ? (
          <p className="pb-8 text-brand-light-500 flex flex-wrap gap-2">
            Synonyms
            {result.synonyms.map((synonym, index) => (
              <span
                key={index}
                className="text-brand-main inline-block cursor-pointer hover:underline"
                onClick={() => handleSynonymClick(synonym)}
              >
                <strong>{synonym}</strong>
              </span>
            ))}
            {/* <span className="text-brand-main inline-block">
              <strong>{result.synonyms.join(', ')}</strong>
            </span> */}
          </p>
        ) : null}
      </div>
    </>
  );
}
