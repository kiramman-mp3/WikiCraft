export async function fetchMinecraftNews(apiKey) {
  const endpoint = `https://newsapi.org/v2/everything?q=minecraft&language=es&apiKey=${apiKey}`;
  const response = await fetch(endpoint);
  const data = await response.json();
  
  const filteredArticles = data.articles.filter(article => {
    const title = article.title.toLowerCase();
    const source = article.source.name.toLowerCase();
    return (
      title.includes('minecraft') || source.includes('minecraft')
    );
  });

  return filteredArticles;
}
