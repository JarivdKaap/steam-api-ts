import NewsItem from '../NewsItem';

export default interface GameNewsResponse {
  appnews: {
    appid: number;
    newsitems: NewsItem[];
    count: number;
  };
}
