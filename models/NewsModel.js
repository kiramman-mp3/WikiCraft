export async function fetchMinecraftNews(subreddit = 'minecraft') {
  // We use AllOrigins as a CORS proxy to fetch Reddit data
  const targetUrl = `https://www.reddit.com/r/${subreddit}/new.json?limit=25`;
  const endpoint = `https://corsproxy.io/?${encodeURIComponent(targetUrl)}`;

  try {
    const response = await fetch(endpoint);
    const data = await response.json();

    if (!data || !data.data || !data.data.children) {
      console.warn(`No se encontraron datos para r/${subreddit}`);
      return [];
    }

    // Map Reddit data to our standard article format
    const articles = data.data.children
      .filter(post => !post.data.over_18 && post.data.thumbnail !== 'self')
      .map(post => {
        const d = post.data;

        // Try multiple sources for images (Preview -> Media -> Thumbnail)
        let imageUrl = '';
        if (d.preview && d.preview.images && d.preview.images[0]) {
          imageUrl = d.preview.images[0].source.url.replace(/&amp;/g, '&');
        } else if (d.media && d.media.oembed && d.media.oembed.thumbnail_url) {
          imageUrl = d.media.oembed.thumbnail_url;
        } else if (d.thumbnail && d.thumbnail.startsWith('http')) {
          imageUrl = d.thumbnail;
        }

        return {
          title: d.title,
          description: d.selftext
            ? d.selftext.substring(0, 150) + '...'
            : `Publicado por u/${d.author} en r/${subreddit}`,
          url: `https://www.reddit.com${d.permalink}`,
          urlToImage: imageUrl, // If empty, the View will use a default
          date: new Date(d.created_utc * 1000).toLocaleDateString()
        };
      });

    return articles;
  } catch (error) {
    console.error(`Error fetching Reddit news from r/${subreddit}:`, error);
    return [];
  }
}
