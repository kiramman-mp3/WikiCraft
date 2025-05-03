export async function fetchMinecraftNews(apiKey) {
  const endpoint = `https://newsapi.org/v2/everything?q=minecraft&language=en&apiKey=${apiKey}`;
  const response = await fetch(endpoint);
  const data = await response.json();
  
  const excludedKeywords = ['película', 'movie', 'film'];

  const filteredArticles = data.articles.filter(article => {
    const title = article.title.toLowerCase();
    const description = (article.description || '').toLowerCase();
  
    const hasExcludedWord = excludedKeywords.some(word => title.includes(word) || description.includes(word));
  
    return (title.includes('minecraft') || description.includes('minecraft')) && !hasExcludedWord;
  });
  
  return filteredArticles;
}
