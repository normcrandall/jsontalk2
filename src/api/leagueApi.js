export const getBowlerLeagues = async bowlerId => {
  let response = await fetch(`/api/leagues/bowler/${bowlerId}`);
  let leagues = await response.json();
  return leagues;
};
