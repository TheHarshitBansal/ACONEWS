function NewsCard({ article }) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer flex flex-col">
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="rounded-lg mb-4 object-cover h-40 w-full"
        />
      )}
      <h3 className="text-lg font-semibold text-yellow-500 mb-2">{article.title}</h3>
      <p className="text-gray-400 flex-grow">{article.description}</p>
    </div>
  );
}

export default NewsCard;