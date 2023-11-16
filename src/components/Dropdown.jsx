import { useState, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

// in dropdown display text of current font
// parent component needs to know which font is chosen to handle it for the body
export default function Dropdown({ setShowFont }) {
  const [font, setFont] = useState('Sans Serif');

  function handleFont(chosenFont) {
    // for display purposes in this component
    setFont(chosenFont);

    // for parent component
    setShowFont(chosenFont);
  }

  return (
    <Menu
      as="div"
      className="relative inline-block text-sm md:text-lg text-left ml-auto border-r border-brand-light-300 pr-4 mr-4"
    >
      <div>
        <Menu.Button className="inline-flex w-full items-center justify-center gap-x-1.5 px-3 py-2 font-bold dark:text-white">
          {font}
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-brand-main"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-brand-dark-700 dark:text-white dark:shadow-brand dark:shadow-brand-main font-bold shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  onClick={() => handleFont('Sans Serif')}
                  href="#"
                  className={classNames(
                    active ? 'text-brand-main' : '',
                    'block px-4 py-2 hover:text-brand-main'
                  )}
                >
                  Sans Serif
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  onClick={() => handleFont('Serif')}
                  href="#"
                  className={classNames(
                    active ? 'text-brand-main' : '',
                    'block px-4 py-2 hover:text-brand-main'
                  )}
                >
                  Serif
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  onClick={() => handleFont('Mono')}
                  href="#"
                  className={classNames(
                    active ? 'text-brand-main' : '',
                    'block px-4 py-2 hover:text-brand-main'
                  )}
                >
                  Mono
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
