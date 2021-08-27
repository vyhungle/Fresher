import axios from "axios";

export const AccessOrder = (order) => {
  console.log(order);
  axios.put(`https://api-bhx.herokuapp.com/order/${order.id}`, order);
};

export const getOrder = () => {
  const data = axios.get("https://api-bhx.herokuapp.com/order?_sort=id&_order=desc");
  return data;
};
