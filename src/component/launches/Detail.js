import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_LAUNCHES_PAST_BY_LAUNCH_ID } from "../graphql/querys";

const Detail = () => {
  const { id } = useParams();
  const { data, error, loading } = useQuery(GET_LAUNCHES_PAST_BY_LAUNCH_ID, {
    variables: {
      launchId: id,
    },
  });

  return (
    <div>
      {error ? <h4>{error.message}</h4> : null}
      {loading ? (
        <h4>Loading....</h4>
      ) : (
        <div>
          <h4>Mission Name : {data?.launch.mission_name}</h4>
          <h4>Launch Date : {data?.launch.launch_date_utc}</h4>
          <h4>Launch Success : {String(data?.launch.launch_success)}</h4>
          <h4>Launch details : {String(data?.launch.details)}</h4>
        </div>
      )}
    </div>
  );
};

export default Detail;
