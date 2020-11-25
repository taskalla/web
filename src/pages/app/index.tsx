import { useQuery, gql } from "@apollo/client";
import React, { useState } from "react";
import HeaderTemplate from "../templates/header";
import Item from "./components/item";
import FilterSwitch from "./components/switch";

export default function AppPage() {
  const [filter, setFilter] = useState<"todo" | "done">("todo");

  const { loading, error, data } = useQuery(
    gql`
      query($done: Boolean!) {
        viewer {
          id
          items(first: 10, filter: { done: $done }) {
            nodes {
              id
              description
              done
            }
          }
        }
      }
    `,
    {
      variables: {
        done: filter == "done",
      },
    }
  );

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
      <div style={{ width: "40%", margin: "0 auto" }}>
        <FilterSwitch selected={filter} onChange={(e) => setFilter(e)} />
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
