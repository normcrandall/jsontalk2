import bowlers from "../mocks/bowler";

export const get = (id = null) => {
  if (id === null) {
    return bowlers;
  }
  return bowlers.find(b => b.id === id);
};
