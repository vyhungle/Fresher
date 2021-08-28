import React from "react";
import { useQuery } from "react-query";
import { getOrder } from "../api/OrderApi";
import SingleOrder from "./SingleOrder";

export default function ListOrder() {
  const { data, status } = useQuery("orders", () => getOrder(), {
    keepPreviousData: true,
    refetchInterval: 500,
  });
  console.log(data?.data);
  return (
    <div>
      <h2>Admin</h2>
      {status === "loading" && <p>loading</p>}
      {status === "success" &&
        data.data.map((item) => <SingleOrder order={item} key={item.id} />)}
    </div>
  );
}
