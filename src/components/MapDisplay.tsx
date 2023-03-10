import React, { useEffect, useState } from "react";
import { StateWinner } from "../typings";
import "./styles/MapDisplay.css";

function MapDisplay() {
  const [winners, setWinners] = useState<StateWinner[]>([]);
  useEffect(() => {
    const fetchWinners = async () => {
      const data: StateWinner[] = await fetch(
        "https://elect-her.herokuapp.com/api/v1/elections/candidate-total-votes?type=map"
      )
        .then((res) => res.json())

        .catch((e) => console.log(e));
      setWinners(data);
    };
    fetchWinners();
  }, []);
  return (
    <>
      <h1 className="section_title">State Winners</h1>
      {winners.length !== 0 ? (
        <div className="mapDisplay">
          <table>
            <thead>
              <tr>
                <th>State</th>
                <th>Winning Party</th>
                <th>Vote Count</th>
              </tr>

              {winners.map((winner) => {
                return (
                  <tr key={winner.id}>
                    <td>{winner.name}</td>
                    <td>{winner.political_party_name}</td>
                    <td>{winner.candidate_votes.toLocaleString()}</td>
                  </tr>
                );
              })}
            </thead>
          </table>
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
}

export default MapDisplay;
