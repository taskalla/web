import { useQuery, gql } from "@apollo/client";
import React from "react";
import HeaderTemplate from "../templates/header";
import Item from "./components/item";

export default function AppPage() {
  const { loading, error, data } = useQuery(gql`
    {
      viewer {
        id
        items(first: 10) {
          nodes {
            id
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
          ({ description, id }: { description: string; id: string }) => (
            <Item key={id} description={description} />
          )
        )}
      </div>
    </HeaderTemplate>
  );
}
