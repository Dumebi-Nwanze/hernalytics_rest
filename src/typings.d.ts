export type Candidate = {
  candidate_id: string;
  candidates_vote: number;
  full_name: string;
  political_party_name: string;
};

export type StateWinner = {
  political_party_name: string;
  id: number;
  country_id: number;
  name: string;
  abbr: string;
  is_active: 1 | 0;
  created_at: string;
  updated_at: string;
  candidate_votes: number;
};

export type StateContestant = {
  state_name: string;
  political_party_name: string;
  candidate_votes: number;
};

export type StateContestants = {
  [key: string]: StateContestant[];
};
