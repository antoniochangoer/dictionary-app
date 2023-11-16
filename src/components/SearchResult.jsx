import ResultHeader from './ResultHeader';
import ResultBody from './ResultBody';
import Source from './Source';

export default function SearchResult({
  searchResult,
  setSearchWord,
  searchForMeaning,
}) {
  // only care about the first result if there is one
  if (searchResult.length > 0) {
    // single out the first result
    const singleResult = [searchResult[0]];

    // Loop over single result and pass props to components
    return singleResult.map((result, index) => (
      <article key={index} className="my-6 md:my-12">
        <ResultHeader
          word={result.word}
          phonetic={result.phonetic}
          phonetics={result.phonetics}
        />
        {/* pass stateSetter func for clicked synonym */}
        <ResultBody
          meanings={result.meanings}
          setSearchWord={setSearchWord}
          searchForMeaning={searchForMeaning}
        />
        <hr className="border-brand-light-300 dark:border-brand-dark-500" />
        <Source urls={result.sourceUrls} />
      </article>
    ));
  }
}
