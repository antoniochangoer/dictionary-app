import Linebreak from './Linebreak';
import { Fragment } from 'react';

export default function Verb({ result }) {
  return (
    <>
      <Linebreak name={result.partOfSpeech} />
      <p className="text-brand-light-500 pt-8 pb-4 md:text-xl">Meaning</p>
      <ul className="pl-6 mb-8 md:text-lg list-disc list-disc-brand marker:text-brand-main">
        {result.definitions.map((meaning, index) => (
          <Fragment key={index}>
            <li className="mb-3">{meaning.definition}</li>
            {/* check if there is example */}
            {meaning.example ? (
              <li className="list-none text-brand-light-500">
                <q>{meaning.example}</q>
              </li>
            ) : null}
          </Fragment>
        ))}
      </ul>
    </>
  );
}
