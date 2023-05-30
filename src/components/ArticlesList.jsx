import React from 'react';
import Article from './organisms/Article';
import articlesData from '../api/articles.json';


const ArticlesList = () => {
  return (
    <div>
      {articlesData.map(article => (
        <Article key={article.id} title={article.title} content={article.content} />
      ))}
    </div>
  );
};

export default ArticlesList;
