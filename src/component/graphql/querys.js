import { gql } from "@apollo/client";

export const GET_COMPANY_CEO = gql`
  query Company {
    company {
      ceo
      cto
      employees
      founded
      founder
      headquarters {
        address
        city
        state
      }
      name
      summary
      valuation
    }
  }
`;

export const GET_LAUNCHES_PAST = gql`
  query LaunchesPast {
    launchesPast {
      id
      details
      mission_name
    }
  }
`;

export const GET_LAUNCHES_PAST_BY_LAUNCH_ID = gql`
  query LaunchesPast($launchId: ID!) {
    launch(id: $launchId) {
      id
      launch_date_utc
      mission_id
      details
      launch_success
      mission_name
    }
  }
`;

export const GET_HISTORIES = gql`
  query Histories {
    histories {
      details
      id
      title
      event_date_utc
      flight {
        mission_name
        details
        launch_date_utc
        launch_success
      }
    }
  }
`;
