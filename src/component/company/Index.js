import { useQuery, NetworkStatus } from "@apollo/client";
import React from "react";
import { GET_COMPANY_CEO } from "../graphql/querys";

const Index = () => {
  const { data, error, loading, refetch, networkStatus } = useQuery(
    GET_COMPANY_CEO,
    {
      notifyOnNetworkStatusChange: true,
      // {pollInterval:500}
    }
  );
  if (networkStatus === NetworkStatus.refetch) return "Refetching!";
  return (
    <div className="container">
      {error ? <h4>{error.message}</h4> : null}
      {loading ? (
        <h4>Loading....</h4>
      ) : (
        <div>
          <h4>Company Name :{data?.company.name}</h4>
          <h4>founded :{data?.company.founded}</h4>
          <h4>Founder :{data?.company.founder}</h4>
          <h4>Ceo :{data?.company.ceo}</h4>
          <h4>Employees :{data?.company.employees}</h4>
          <div>
            <h4> Headquarters:</h4>
            <p>Address :{data?.company.headquarters.address}</p>
            <p>City :{data?.company.headquarters.city}</p>
            <p>State :{data?.company.headquarters.state}</p>
          </div>
          <h4>Valuation : {data?.company.valuation}</h4>
          <p>Summary :{data?.company.summary}</p>
        </div>
      )}
      <button onClick={() => refetch({ breed: "Company" })}>
        Refetch new breed!
      </button>
    </div>
  );
};

export default Index;
