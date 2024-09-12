import { XIcon } from "@heroicons/react/solid";

function MobileDrawer({ isOpen, setIsDrawerOpen, onCategorySelect }) {
  const categories = ['World', 'Sports', 'Tech', 'Business', 'Health'];

  const handleCategoryClick = (category) => {
    onCategorySelect(category); 
    setIsDrawerOpen(false);
  };

  return (
    <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:hidden`}>
      <div className="relative w-64 bg-gray-900 h-full p-6">
        <button onClick={() => setIsDrawerOpen(false)} className="absolute top-4 right-4">
          <XIcon className="h-6 w-6 text-yellow-500" />
        </button>
        <h2 className="text-xl font-semibold text-yellow-500 mb-4">Categories</h2>
        <ul className="space-y-4">
          {categories.map((category) => (
            <li key={category} className="text-gray-100 hover:text-yellow-500 cursor-pointer" onClick={() => handleCategoryClick(category)}>
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MobileDrawer;