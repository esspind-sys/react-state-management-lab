import type { Fighter } from "./shared.types";

export const calculateTeamStats = (team: Fighter[]) => {
  return team.reduce(
    (stats, fighter) => ({
      cost: stats.cost + fighter.price,
      strength: stats.strength + fighter.strength,
      agility: stats.agility + fighter.agility,
    }),
    { cost: 0, strength: 0, agility: 0 }
  );
};