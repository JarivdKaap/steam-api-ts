import SteamAPI from '../index';

test('GetPublishedFileDetails', async () => {
  const steamApi = new SteamAPI(process.env.STEAM_API || 'key');
  const publishedFileDetails = await steamApi.getPublishedFileDetails(1128166280);
  expect(publishedFileDetails).toBeDefined();
});
