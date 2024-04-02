export interface ILaunchesPastResultData {
  data: ILaunchesPastResult;
}
export interface ILaunchesPastResult {
  launchesPast: ILaunchesPast[];
}

export interface ILaunchesPast {
  id: string;
  mission_name: string;
  rocket: IRocket;
  launch_year: string;
}

export interface IRocket {
  rocket_name: string;
  rocket_type: string;
}
