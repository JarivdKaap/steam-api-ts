import GameAchievement from './GameAchievement';

export default interface PlayerStats {
  steamID: string;
  gameName: string;
  achievements: GameAchievement[];
}
