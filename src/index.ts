import fetch from 'node-fetch';
import { Applist, GetAppList } from './Structs/AppList';
import { FeaturedCategories } from './Structs/FeaturedCategories';

const BASE_URL = 'https://api.steampowered.com';
const STORE_URL = 'https://store.steampowered.com/api';

export default class SteamAPI {
  developerKey: string;
  baseUrl: string;
  baseStore: string;

  constructor(developerKey: string, baseUrl: string = BASE_URL, baseStore: string = STORE_URL) {
    this.developerKey = developerKey;
    this.baseUrl = baseUrl;
    this.baseStore = baseStore;
  }

  async get(path: string, baseUrl: string = this.baseUrl): Promise<object> {
    return fetch(`${baseUrl}${path}`) // ${path.includes('?') ? '&' : '?'}key=${this.developerKey}
      .then((res) => res.json());
  }

  async getAppList(): Promise<Applist> {
    return (await this.get('/ISteamApps/GetAppList/v2').then((json) => (json as GetAppList).applist.apps)) as Applist;
  }

  async getFeaturedCategories(): Promise<FeaturedCategories> {
    return (await this.get('/featuredcategories', this.baseStore)) as FeaturedCategories;
  }
}
