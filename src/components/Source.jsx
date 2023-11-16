import { Fragment } from 'react';
import WindowIcon from './WindowIcon';

export default function Source({ urls }) {
  return (
    <footer className="mt-6 text-sm md:flex">
      <p className="text-brand-light-500 md:mr-5">Source</p>
      <div className="flex flex-wrap">
        {urls.map((url, index) => (
          <Fragment key={index}>
            <a
              className="underline"
              rel="noopener noreferrer"
              target="_blank"
              href={url}
            >
              {url}
              <span className="inline-block ml-2">
                <WindowIcon />
              </span>
            </a>
          </Fragment>
        ))}
      </div>
    </footer>
  );
}
