import Dropdown from './Dropdown';
import Logo from './Logo';
import Toggle from './Toggle';

export default function Navbar({ setShowFont }) {
  return (
    <header>
      <nav className="flex items-center justify-center">
        <Logo />
        <Dropdown setShowFont={setShowFont} />
        <Toggle />
      </nav>
    </header>
  );
}
