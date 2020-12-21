import { useQuery, gql, useMutation } from "@apollo/client";
import React, { useState } from "react";
import HeaderTemplate from "../templates/header";
import Item from "./components/item";
import FilterSwitch from "./components/switch";

export default function AppPage() {
  const [filter, setFilter] = useState<"todo" | "done">("todo");

  const { error, data, refetch } = useQuery(
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

  const [updateItem] = useMutation(gql`
    mutation($id: ID!, $done: Boolean!) {
      updateItem(input: { id: $id, done: $done }) {
        id
        done
      }
    }
  `);

  let items: React.ReactElement = <div>Loading</div>;

  if (error) {
    items = <div>Error</div>;
  }

  if (data) {
    items = data.viewer.items.nodes.map(
      ({
        description,
        id,
        done,
      }: {
        description: string;
        id: string;
        done: boolean;
      }) => (
        <Item
          key={id}
          description={description}
          done={done}
          onCheckboxClick={() => updateItem({ variables: { id, done: !done } })}
        />
      )
    );
  }

  return (
    <HeaderTemplate>
      <div style={{ width: "40%", margin: "0 auto" }}>
        <FilterSwitch selected={filter} onChange={(e) => setFilter(e)} />
        {items}
      </div>
    </HeaderTemplate>
  );
}
