import React, { useEffect, useState } from "react";
import "./styles/CandidatesList.css";
import { Candidate } from "../typings";

function CandidatesList() {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  useEffect(() => {
    const fetchCandidates = async () => {
      const data: Candidate[] = await fetch(
        "https://elect-her.herokuapp.com/api/v1/elections/candidate-total-votes?type=president"
      )
        .then((res) => res.json())

        .catch((e) => console.log(e));
      setCandidates(data.sort((a, b) => b.candidates_vote - a.candidates_vote));
    };
    fetchCandidates();
  }, []);

  return (
    <div className="c__list">
      {" "}
      <h1>Election Leaderboard</h1>
      {candidates.length === 0 ? (
        <h1>Loading</h1>
      ) : (
        candidates.map((candidate, i) => {
          return (
            <CandidateListItem
              key={candidate.candidate_id}
              index={i + 1}
              candidate={candidate}
            />
          );
        })
      )}
    </div>
  );
}

export default CandidatesList;

function CandidateListItem({
  candidate,
  index,
}: {
  candidate: Candidate;
  index: number;
}) {
  return (
    <div className="list_item">
      <div style={{ paddingRight: "40px" }}>{index}</div>
      <div className="item__name">
        <h3>{candidate.full_name}</h3>
        <p>{candidate.political_party_name}</p>
      </div>
      <div>
        <h3>{`${candidate.candidates_vote.toLocaleString()} votes`}</h3>
      </div>
    </div>
  );
}
