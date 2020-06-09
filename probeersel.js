const idfk = require('./lib/index');

const api = new idfk.SteamAPI('key');
console.log(api);
//api.getAppList().then((resp) => console.log(resp));
api.getFeaturedCategories().then((resp) => console.log(resp));
//console.log(api.get('path'));
