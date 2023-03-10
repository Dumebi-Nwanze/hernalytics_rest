import React, { useEffect, useState } from "react";
import { StateContestants } from "../typings";
import "./styles/StateTallyList.css";

function StateTallyList() {
  const [stateTallies, setStateTallies] = useState<StateContestants | null>(
    null
  );
  const [keys, setKeys] = useState<string[]>([]);
  useEffect(() => {
    const fetchStateRes = async () => {
      const data = await fetch(
        "https://elect-her.herokuapp.com/api/v1/elections/candidate-total-votes?type=state_result"
      )
        .then((res) => res.json())
        .catch((e) => console.log(e));
      setStateTallies(data);
      setKeys(Object.keys(data));
    };
    fetchStateRes();
  }, []);

  return (
    <div className="stateTally">
      {stateTallies ? (
        <div>
          <h1>Results By State</h1>
          <div className="tallyContainer">
            {keys.map((key, i) => {
              return (
                <div key={i} className="stateResult">
                  <h3>{key.toUpperCase()}</h3>
                  {stateTallies[key].map((party, i) => {
                    return (
                      <div key={i} className="partyVote">
                        <p>{party.political_party_name}</p>
                        <p>{`${party.candidate_votes.toLocaleString()} votes`}</p>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
}

export default StateTallyList;
