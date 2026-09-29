import { describe, expect, it } from "vitest";
import { calculateTeamStats } from "./teamUtils";
import type { Fighter } from "./shared.types";

describe("calculateTeamStats", () => {
  it("calculates the team's total cost, strength, and agility", () => {
    const team: Fighter[] = [
      {
        id: 1,
        name: "Survivor",
        price: 12,
        strength: 6,
        agility: 4,
        img: "survivor.png",
      },
      {
        id: 8,
        name: "Brawler",
        price: 11,
        strength: 8,
        agility: 3,
        img: "brawler.png",
      },
    ];

    expect(calculateTeamStats(team)).toEqual({
      cost: 23,
      strength: 14,
      agility: 7,
    });
  });
});