import GameAchievement from './GameAchievement';

export interface PlayerStats {
  steamID: string;
  gameName: string;
  achievements: GameAchievement[];
}

export type PlayerStatsResponse = {
  playerstats: PlayerStats;
};
