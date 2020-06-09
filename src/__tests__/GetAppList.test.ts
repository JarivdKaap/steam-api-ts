import { SteamAPI } from '../index';

test('GetAppList', async () => {
  const steamApi = new SteamAPI('key');
  const appList = await steamApi.getAppList();
  expect(appList).toBeDefined();
  expect(appList.length).toBeGreaterThan(0);
  expect(appList[0].appid).toBe(216938);
});
