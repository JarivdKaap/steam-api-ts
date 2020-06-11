import SteamAPI from '../index';

test('GetAppList', async () => {
  const steamApi = new SteamAPI(process.env.STEAM_API || 'key');
  const featuredCategories = await steamApi.getFeaturedCategories();
  expect(featuredCategories).toBeDefined();
  expect(featuredCategories.status).toBe(1);
});
