import { useQuery, gql } from "@apollo/client";
import React from "react";
import HeaderTemplate from "../templates/header";

export default function AppPage() {
  const { loading, error, data } = useQuery(gql`
    {
      viewer {
        items(first: 10) {
          edges {
            node {
              description
            }
          }
        }
      }
    }
  `);

  if (loading)
    return (
      <HeaderTemplate>
        <div>Loading</div>
      </HeaderTemplate>
    );
  if (error)
    return (
      <HeaderTemplate>
        <div>Error</div>
      </HeaderTemplate>
    );

  return (
    <HeaderTemplate>
      <div>{JSON.stringify(data.viewer.items.edges)}</div>
    </HeaderTemplate>
  );
}
