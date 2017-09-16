export const get = async id => {
  if (id) {
    let response = await fetch(`/api/bowler/${id}`);
    let bowler = await response.json();
    return bowler;
  } else {
    let response = await fetch("api/bowler");
    let bowlers = await response.json();
    return bowlers;
  }
};
