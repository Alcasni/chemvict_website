// 1. Scan the current directory for files starting with 'news' and ending in .js or .jsx
// Arguments: (directory, useSubdirectories, regExp)
const context = require.context('./', false, /\.\/news\d+\.(js|jsx)$/);

export const allFirmNews = context.keys()
  .map((key) => {
    const module = context(key);
    // This looks for the first exported object in the file (e.g., news1, news2)
    const exportName = Object.keys(module)[0];
    return module[exportName];
  })
  // 2. Automatically sort by ID (Newest first)
  // We use Number() to ensure it treats "10" as higher than "9"
  .sort((a, b) => Number(b.id) - Number(a.id));

// 3. Helper to find a specific article by slug
export const getFirmNewsBySlug = (slug) => {
  return allFirmNews.find((item) => item.slug === slug);
};