import SteamAPI from '../index';

test('GetAppList', async () => {
  const steamApi = new SteamAPI('key');
  const featedCategories = await steamApi.getFeaturedCategories();
  expect(featedCategories).toBeDefined();
  expect(featedCategories.status).toBe(1);
});
