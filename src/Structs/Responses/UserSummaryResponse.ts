import UserSummary from "../UserSummary";

export default interface UserSummaryResponse {
  response: {
    players: UserSummary[];
  };
};