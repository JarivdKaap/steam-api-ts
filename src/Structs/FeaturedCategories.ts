type item = {
  name: string;
  header_image: string;
  body: string;
  url: string;
};

export default interface FeaturedCategories {
  status: number;
  trailerslideshow: { id: string; name: string };
  genres: { id: string; name: string };
  new_releases: { id: string; name: string };
  top_sellers: { id: string; name: string };
  coming_soon: { id: string; name: string };
  specials: { id: string; name: string };
  '0': { id: string; name: string; items: item[] };
  '1': { id: string; name: string; items: item[] };
  '2': { id: string; name: string; items: item[] };
  '3': { id: string; name: string; items: item[] };
}
