import { gql } from '@apollo/client';

export const GET_LAUNCHES_PAST = gql`
  query LaunchesPast(
    $find: LaunchFind
    $sort: String
    $limit: Int
    $offset: Int
    $order: String
  ) {
    launchesPast(
      find: $find
      sort: $sort
      limit: $limit
      offset: $offset
      order: $order
    ) {
      id
      mission_name
      rocket {
        rocket_name
        rocket_type
      }
      launch_year
    }
  }
`;
