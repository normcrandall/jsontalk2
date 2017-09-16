import leagues from "../mocks/leagues";
import { get as getBowler } from "../mockApi/bowlerApi";

export const get = bowlerId => {
  let bowler = getBowler(bowlerId);
  if (bowler) {
    let bowlerLeagues = [];
    bowler.leagues.forEach(league => {
      let leagueIndex = leagues.findIndex(l => l.id === league.id);
      if (leagueIndex > -1) {
        bowlerLeagues.push(leagues[leagueIndex]);
      }
    });
    return bowlerLeagues;
  }
  return [];
};
