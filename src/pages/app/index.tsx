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
            done
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
          ({
            description,
            id,
            done,
          }: {
            description: string;
            id: string;
            done: boolean;
          }) => (
            <Item key={id} description={description} done={done} />
          )
        )}
      </div>
    </HeaderTemplate>
  );
}
