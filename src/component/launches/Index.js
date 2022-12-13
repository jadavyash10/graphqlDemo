import React from "react";
import { useLazyQuery, useQuery } from "@apollo/client";
import { GET_LAUNCHES_PAST } from "../graphql/querys";
import { Link } from "react-router-dom";

const Index = () => {
  const { data, error, loading } = useQuery(GET_LAUNCHES_PAST, {
    // fetchPolicy: 'network-only',
    // nextFetchPolicy: 'cache-first',
  });
  // const [getLaunchesPast,{ data, error, loading }] = useLazyQuery(GET_LAUNCHES_PAST,{

  // });

  return (
    <div>
      {error ? <h4>{error.message}</h4> : null}
      {loading ? (
        <h4>Loading....</h4>
      ) : (
        data?.launchesPast?.map((v, i) => {
          return (
            <p key={v.id}>
              <Link to={`/detail/${v.id}`}>{v.mission_name}</Link>
            </p>
          );
        })
      )}
      {/* <button onClick={()=>getLaunchesPast({variables:{breed:"LaunchesPast"}})}>Click</button> */}
    </div>
  );
};

export default Index;
