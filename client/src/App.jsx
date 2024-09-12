import { useState } from 'react';
import Header from './components/Header';
import NewsList from './components/NewsList';
import MobileDrawer from './components/MobileDrawer';

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
   const [selectedCategory, setSelectedCategory] = useState('');
  const [onSearch, setOnSearch] = useState('');

  return (
    <div className="flex flex-col bg-gray-900 text-gray-100">
      <Header setIsDrawerOpen={setIsDrawerOpen} onSearch={setOnSearch} Category={setSelectedCategory}/>
      <MobileDrawer isOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} onCategorySelect={setSelectedCategory}/>
      <div className="flex-1">
        <NewsList selectedCategory={selectedCategory} onSearch={onSearch} />
      </div>
    </div>
  );
}

export default App;