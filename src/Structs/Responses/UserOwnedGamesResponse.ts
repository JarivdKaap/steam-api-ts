import Game from '../Game';

export default interface UserOwnedGamesResponse {
  response: {
    game_count: number;
    games: Game[];
  };
}
