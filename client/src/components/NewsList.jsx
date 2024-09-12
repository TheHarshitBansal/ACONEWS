import { useState, useEffect } from 'react';
import NewsCard from './NewsCard';
import Pagination from './Pagination';
import api from '../api/axios';

function NewsList({ selectedCategory, onSearch }) {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const BASE_URL = 'http://localhost:8080'; 

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await api.get(`${BASE_URL}/api/news`, {
          params: { page,
            q: onSearch ? onSearch : selectedCategory ? selectedCategory : 'latest',
           }
        });
        setNews(response.data.articles);
      } catch (error) {
        setError('Failed to load news. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [page, selectedCategory, onSearch]);

  if (loading) {
    return <div className="flex justify-center items-center h-full">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-full">{error}</div>;
  }

  return (
    <div className='mb-6'>
        <div className="flex-1 p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {news.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </div>
    <Pagination currentPage={page} setPage={setPage}/>
    </div>
    
  );
}

export default NewsList;