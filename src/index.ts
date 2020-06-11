import fetch from 'node-fetch';
import FeaturedCategories from './Structs/FeaturedCategories';
import FeaturedGames from './Structs/FeaturedGames';
import { UserSummaryResponse, UserSummary } from './Structs/UserSummary';
import UserLevelResponse from './Structs/Responses/UserLevelResponse';
import App from './Structs/App';
import AppListResponse from './Structs/Responses/AppListResponse';
import GameAchievement from './Structs/GameAchievement';
import GameAchievementsResponse from './Structs/Responses/GameAchievementReponse';
import UserGroupsResponse from './Structs/Responses/UserGroupsResponse';
import Game from './Structs/Game';
import UserOwnedGamesResponse from './Structs/Responses/UserOwnedGamesResponse';
import { PlayerStats } from './Structs/PlayerStats';
import UserStatsResponse from './Structs/Responses/UserStatsResponse';

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
    return fetch(`${baseUrl}${path}${path.includes('?') ? '&' : '?'}key=${this.developerKey}`) //
      .then((res) => res.json());
  }

  async getAppList(): Promise<App[]> {
    return (await this.get('/ISteamApps/GetAppList/v2').then(
      (json) => (json as AppListResponse).appList.apps,
    )) as App[];
  }

  async getFeaturedCategories(): Promise<FeaturedCategories> {
    return (await this.get('/featuredcategories', this.baseStore)) as FeaturedCategories;
  }

  async getFeaturedGames(): Promise<FeaturedGames> {
    return (await this.get('/featured', this.baseStore)) as FeaturedGames;
  }

  async getGameAchievements(appId: number): Promise<GameAchievement[]> {
    return await this.get(`/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v2?gameid=${appId}`).then(
      (json) => (json as GameAchievementsResponse).achievementpercentages.achievements,
    );
  }

  async getUserGroups(userId: string): Promise<string[]> {
    return await this.get(`/ISteamUser/GetUserGroupList/v1?steamid=${userId}`).then((json) =>
      (json as UserGroupsResponse).response.groups.map((g) => g.gid),
    );
  }

  async getUserLevel(userId: string): Promise<number> {
    return await this.get(`/IPlayerService/GetSteamLevel/v1?steamid=${userId}`).then(
      (json) => (json as UserLevelResponse).response.player_level,
    );
  }

  async getUserOwnedGames(userId: string): Promise<Game[]> {
    return await this.get(`/IPlayerService/GetOwnedGames/v1?steamid=${userId}&include_appinfo=1`).then(
      (json) => (json as UserOwnedGamesResponse).response.games,
    );
  }

  async getUserRecentGames(userId: string): Promise<Game[]> {
    return await this.get(`/IPlayerService/GetRecentlyPlayedGames/v1?steamid=${userId}`).then(
      (json) => (json as UserOwnedGamesResponse).response.games,
    );
  }

  async getUserServers() {
    // TODO: No idea what it does.
    return await this.get('/IGameServersService/GetAccountList/v1');
  }

  async getUserStats(userId: string, appId: number): Promise<PlayerStats> {
    return await this.get(`/ISteamUserStats/GetUserStatsForGame/v2?steamid=${userId}&appid=${appId}`).then(
      (json) => (json as UserStatsResponse).playerstats,
    );
  }

  async getUserSummary(userId: string): Promise<UserSummary> {
    return (await this.get(`/ISteamUser/GetPlayerSummaries/v2?steamids=${userId}`).then((json) => {
      const user = (json as UserSummaryResponse).response.players;
      if (!user || user.length != 1) Promise.reject(new Error('No player found'));
      return user;
    })) as UserSummary;
  }
}
