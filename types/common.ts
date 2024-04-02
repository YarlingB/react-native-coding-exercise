export type SortDataType = 'asc' | 'desc';

export type OrderLaunchesPastType =
  | 'launch_year'
  | 'rocket_type'
  | 'rocket_name'
  | 'mission_name';

export type OrderLaunchesPastObject = {
  [Key in OrderLaunchesPastType]: string;
};
