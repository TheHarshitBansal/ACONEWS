import { useState } from 'react';
import { MenuIcon } from '@heroicons/react/solid';

function Header({ setIsDrawerOpen, onSearch, Category }) {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchInput, setSearchInput] = useState('');

  const categories = ['World', 'Sports', 'Tech', 'Business', 'Health'];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    Category(category);
    onSearch('');
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchInput);
  };

  return (
    <header className="flex items-center justify-between gap-5 p-4 bg-white shadow-md">
      <div className="flex items-center space-x-4">
        <button className="md:hidden" onClick={() => setIsDrawerOpen(true)}>
          <MenuIcon className="h-6 w-6 text-rose-600" />
        </button>
        <h1 className="text-2xl font-bold text-rose-600">ACONEWS</h1>
      </div>
      <nav className="hidden md:flex space-x-6">
        {categories.map((category) => (
          <span
            key={category}
            className={`text-rose-400 hover:text-rose-600 cursor-pointer ${
              selectedCategory === category ? 'font-bold text-rose-800' : ''
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </span>
        ))}
      </nav>
      <div className='flex gap-2'>
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        className="px-4 py-2 w-full max-w-xs rounded-lg bg-gray-200 text-black placeholder-gray-400 focus:outline-none ring-1 ring-red-500"
        placeholder="Search news..."
        onSubmit={handleSearchSubmit}
      />
      <button type="submit" className="px-3 py-1 rounded-lg bg-white text-rose-600 border border-rose-600 hover:bg-rose-700 hover:text-white" onClick={handleSearchSubmit}>
          Search
        </button>
      </div>
      
    </header>
  );
}

export default Header;