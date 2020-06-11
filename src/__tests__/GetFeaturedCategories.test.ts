import SteamAPI from '../index';

test('GetFeaturedCategories', async () => {
  const steamApi = new SteamAPI(process.env.STEAM_API || 'key');
  const categories = await steamApi.getFeaturedCategories();
  expect(categories.status).toBe(1);
  expect(categories.specials).toBeDefined();
  expect(categories.coming_soon).toBeDefined();
  expect(categories.top_sellers).toBeDefined();
  expect(categories.new_releases).toBeDefined();
});
