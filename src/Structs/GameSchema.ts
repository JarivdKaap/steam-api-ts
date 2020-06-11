export default interface GameSchema {
  gameName: string;
  gameVersion: string;
  availableGameStats: AvailableGameStats;
}

type Achievement = {
  name: string;
  defaultvalue: number;
  displayName: string;
  hidden: number;
  description: string;
  icon: string;
  icongray: string;
};

type AvailableGameStats = {
  achievements: Achievement[];
};
