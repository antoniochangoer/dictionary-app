import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import SearchResult from './SearchResult';
import Error from './Error';

const ENDPOINT = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

export default function SearchBar() {
  const [searchWord, setSearchWord] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [error, setError] = useState('');

  // idle | loading | success | error | empty (nothing found)
  const [status, setStatus] = useState('idle');

  // accept argument to not only use state if not needed
  async function searchForMeaning(newSearchWord = searchWord) {
    // send searchWord to API
    const response = await fetch(`${ENDPOINT}${newSearchWord}`);
    setStatus('loading');
    console.log(response);

    if (response.status === 404 || !response.ok) {
      setStatus('empty');
    } else {
      setStatus('success');
      const data = await response.json();
      console.log(data);

      // set state to response from API
      setSearchResult(data);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (searchWord.trim() === '') {
      setStatus('error');
      setError('Whoops, can’t be empty…');
      return;
    }

    // initiate search with searchWord as default argument
    searchForMeaning();
  }

  return (
    <>
      <form className="mt-6 md:mt-12" onSubmit={handleSubmit}>
        <label htmlFor="word" className="sr-only">
          Search word
        </label>
        <div className="relative">
          <input
            value={searchWord}
            onChange={(e) => {
              setSearchWord(e.target.value);
              setStatus('idle');
            }}
            disabled={status === 'loading'}
            autoComplete="off"
            type="text"
            name="word"
            id="word"
            className={`font-bold pl-6 py-3 bg-brand-light-300 dark:bg-brand-dark-700 block w-full rounded-2xl border-0 text-inherit shadow-sm ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-main text-base md:text-xl ${
              status === 'error'
                ? 'focus:ring-brand-red outline-1 outline-brand-red'
                : null
            }}`}
            placeholder="Search for any word..."
          />
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <MagnifyingGlassIcon
              className="h-5 w-5 text-brand-main"
              aria-hidden="true"
            />
          </div>
        </div>
        {status === 'error' && (
          <span className="mt-2 text-brand-red">{error}</span>
        )}
      </form>

      {status !== 'empty' && (
        <SearchResult
          searchResult={searchResult}
          setSearchWord={setSearchWord}
          searchForMeaning={searchForMeaning}
        />
      )}
      {/* If no definition found show error */}
      {status === 'empty' && <Error />}
    </>
  );
}
