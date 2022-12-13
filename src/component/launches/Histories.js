import React from "react";
import { useQuery } from "@apollo/client";
import { GET_HISTORIES } from "../graphql/querys";

const Histories = () => {
  const onComplete = (data) => {
    console.log("data", data);
  };

  const onError = () => {
    console.log("error");
  };

  const { data, error, loading, refetch, networkStatus, client } = useQuery(
    GET_HISTORIES,
    {
      // fetchPolicy:"cache-first"                  //cancel request if already in cache
      //   fetchPolicy: "cache-only",              //if already in cache then it run else null
      //   fetchPolicy: "cache-and-network",       //run api everyTime
      // fetchPolicy:"network-only"                //run api everyTime
      //   fetchPolicy:"no-cache"                        //not storing cache
      onCompleted: (data) => onComplete(data),
      onError: onError,
      // skip:true                                    //not call api
      //   returnPartialData: true,                   //return partialdata which data request is not in chached
    }
  );

  if (error) return error.message;
  if (loading) return <h4>Loading...</h4>;
  console.log({ data, error, loading, client });

  return (
    <div>
      {data?.histories?.map((value, index) => {
        return (
          <div key={value.id}>
            <p>{index}</p>
            <h4>title:{value.title}</h4>
            <h4>Date:{value.event_date_utc}</h4>
            <h4>details:{value.details}</h4>
            {value.flight ? (
              <div>
                <h3>flight</h3>
                <h4>mission_name :{value.flight.mission_name}</h4>
                <h4>details :{value.flight.details}</h4>
                <h4>date :{value.flight.launch_date_utc}</h4>
                <h4>launch_success :{String(value.flight.launch_success)}</h4>
              </div>
            ) : null}
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Histories;
