export interface Player {
  kills: number;
  username: string;
}

interface Team {
  name: string;
  place: number;
  players: Player[];
  points: number;
  total_kills: number;
}

export interface AwayTeam extends Team {}
export interface HomeTeam extends Team {}

export type Status = "Finished" | "Ongoing" | "Scheduled";

export interface IMatch {
  awayScore: number;
  awayTeam: AwayTeam;
  homeScore: number;
  homeTeam: HomeTeam;
  status: Status;
  time: Date;
  title: string;
}
