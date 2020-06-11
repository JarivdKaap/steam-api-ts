import GameAchievement from '../GameAchievement';

type Achievementpercentages = {
  achievements: GameAchievement[];
};

export default interface GameAchievementsResponse {
  achievementpercentages: Achievementpercentages;
}
