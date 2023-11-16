import { useState } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';

function App() {
  const [showFont, setShowFont] = useState('Sans Serif');

  if (showFont === 'Sans Serif') {
    setShowFont('font-sans');
  }

  if (showFont === 'Serif') {
    setShowFont('font-serif');
  }

  if (showFont === 'Mono') {
    setShowFont('font-mono');
  }

  return (
    <div
      className={`${showFont} text-brand-dark-600 dark:text-white bg-white dark:bg-brand-dark-800`}
    >
      <div className="p-6 max-w-3xl mx-auto min-h-screen">
        <Navbar setShowFont={setShowFont} />
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
