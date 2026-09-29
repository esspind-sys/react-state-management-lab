import { useState } from "react";
import "./App.css";
import { startingFighters } from "./data";
import { calculateTeamStats } from "./teamUtils";
import type { Fighter } from "./shared.types";

const STARTING_MONEY = 100;

function App() {
  const [team, setTeam] = useState<Fighter[]>([]);
  const [money, setMoney] = useState(STARTING_MONEY);

  const stats = calculateTeamStats(team);

  const addFighter = (fighter: Fighter) => {
    const alreadySelected = team.some((member) => member.id === fighter.id);

    if (alreadySelected || money < fighter.price) {
      return;
    }

    setTeam([...team, fighter]);
    setMoney(money - fighter.price);
  };

  const removeFighter = (fighter: Fighter) => {
    setTeam(team.filter((member) => member.id !== fighter.id));
    setMoney(money + fighter.price);
  };

  const isInTeam = (fighter: Fighter) => {
    return team.some((member) => member.id === fighter.id);
  };

  return (
    <main className="app">
      <h1>Zombie Fighters</h1>

      <section className="stats">
        <p>Money: ${money}</p>
        <p>Team Cost: ${stats.cost}</p>
        <p>Team Strength: {stats.strength}</p>
        <p>Team Agility: {stats.agility}</p>
      </section>

      <section>
        <h2>Team</h2>

        {team.length === 0 ? (
          <p className="empty-message">Pick some team members</p>
        ) : (
          <ul className="fighter-list">
            {team.map((fighter) => (
              <li className="fighter-card" key={fighter.id}>
                <img src={fighter.img} alt={fighter.name} />
                <h3>{fighter.name}</h3>
                <p>Price: ${fighter.price}</p>
                <p>Strength: {fighter.strength}</p>
                <p>Agility: {fighter.agility}</p>
                <button type="button" onClick={() => removeFighter(fighter)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h2>Fighters</h2>

        <ul className="fighter-list">
          {startingFighters.map((fighter) => {
            const selected = isInTeam(fighter);

            return (
              <li className="fighter-card" key={fighter.id}>
                <img src={fighter.img} alt={fighter.name} />
                <h3>{fighter.name}</h3>
                <p>Price: ${fighter.price}</p>
                <p>Strength: {fighter.strength}</p>
                <p>Agility: {fighter.agility}</p>

                <button
                  type="button"
                  onClick={() => addFighter(fighter)}
                  disabled={selected || money < fighter.price}
                >
                  {selected ? "Selected" : "Add"}
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default App;