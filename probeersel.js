const SteamAPI = require('./lib/index');

const api = new SteamAPI.default('key');
console.log(api);
//api.getAppList().then((resp) => console.log(resp));
api.getFeaturedCategories().then((resp) => console.log(resp['0']));
//console.log(api.get('path'));
