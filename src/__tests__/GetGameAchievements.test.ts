import SteamAPI from '../index';

test('GetAppList', async () => {
  const steamApi = new SteamAPI(process.env.STEAM_API || 'key');
  const featuredCategories = await steamApi.getGameAchievements(311210);
  expect(featuredCategories).toBeDefined();
  expect(featuredCategories.length).toBeGreaterThan(0);
});
