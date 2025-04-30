import { useState } from 'react';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';

const ThemeDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState('Device');

  const toggleDropdown = () => setIsOpen(!isOpen);
  const selectTheme = (theme) => {
    setSelectedTheme(theme);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="inline-flex h-12 justify-between items-center w-32 pl-4 pr-2 w- py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        {selectedTheme}
        <span className="ml-2">
          {isOpen ? (
            <MdArrowDropUp className="w-8 h-8 text-gray-500" />
          ) : (
            <MdArrowDropDown className="w-8 h-8 text-gray-500" />
          )}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1 text-left w-32 origin-top-right bg-white border border-gray-300 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {['Light', 'Dark', 'Device'].map((theme) => (
              <button
                key={theme}
                onClick={() => selectTheme(theme)}
                className="flex w-32 pl-4 py-1 text-sm text-gray-700 hover:bg-gray-200"
              >
                {theme}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeDropdown;
