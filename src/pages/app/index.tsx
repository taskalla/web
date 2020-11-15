import { useQuery, gql } from "@apollo/client";
import React from "react";
import HeaderTemplate from "../templates/header";
import Item from "./components/item";

export default function AppPage() {
  const { loading, error, data } = useQuery(gql`
    {
      viewer {
        items(first: 10) {
          nodes {
            description
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
      <div>
        {data.viewer.items.nodes.map(
          ({ description }: { description: string }) => (
            <Item description={description} />
          )
        )}
      </div>
    </HeaderTemplate>
  );
}
