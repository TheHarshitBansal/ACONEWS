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
    <header className="flex items-center justify-between p-4 bg-gray-800 shadow-md">
      <div className="flex items-center space-x-4">
        <button className="md:hidden" onClick={() => setIsDrawerOpen(true)}>
          <MenuIcon className="h-6 w-6 text-yellow-500" />
        </button>
        <h1 className="text-2xl font-bold text-yellow-500">ACONEWS</h1>
      </div>
      <nav className="hidden md:flex space-x-6">
        {categories.map((category) => (
          <span
            key={category}
            className={`text-gray-100 hover:text-yellow-500 cursor-pointer ${
              selectedCategory === category ? 'font-bold text-yellow-500' : ''
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
        className="px-4 py-2 w-full max-w-xs rounded bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        placeholder="Search news..."
        onSubmit={handleSearchSubmit}
      />
      <button type="submit" className="px-3 py-1 rounded-md bg-yellow-500 text-gray-900 hover:bg-yellow-600" onClick={handleSearchSubmit}>
          Search
        </button>
      </div>
      
    </header>
  );
}

export default Header;