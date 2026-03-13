import { news1 } from './news1';
import { news2 } from './news2';
import { news3 } from './news3';
import { news4 } from './news4';
import { news5 } from './news5';
import { news6 } from './news6';

export const allSustainabilityNews = [
  news1, news2, news3, news4, news5, news6
].sort((a, b) => a.id - b.id);

export const getNewsBySlug = (slug) => {
  return allSustainabilityNews.find((item) => item.slug === slug);
};