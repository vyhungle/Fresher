import React from "react";
import styled from "styled-components";
import { useMutation } from "react-query";
import { AccessOrder } from "../api/OrderApi";
import { addNotification } from "../api/NotificationApi";
import { sendFcmNotification } from "../api/FcmIpa";

export default function SingleOrder({ order }) {
  const { mutateAsync } = useMutation(AccessOrder);

  const AddNotification = (order) => {
    addNotification({
      phoneNumber: order.phoneNumber,
      orderId: order.id,
      body: "Đơn hàng của bạn đã được xác nhận, đơn hàng sẽ được giao trong vòng vài giời tới",
      read: false,
    });
  };

  const sendNotification = (order) => {
    sendFcmNotification({
    to:"c6KerJRJQrGUBtG4muq4oj:APA91bFh0fOygpGD7DzRZaEUL_6e2k4hs16NMH0Sxanmsw5HIJ00Fqw8n9T9FsBPdcIUzU031ZK0D0UXAyJkKZrH07taC2zel5_jeuo6PH81Wqbio_5ptucCtPA0rpBn9shM6QoNq5XA",
    notification:{
      "title": "Đơn hàng đã được xác nhận",
      "body": "Đơn hàng của bạn đã được xác nhận, đơn hàng sẽ được giao trong vòng vài giời tới",
      "mutable_content": true,
      "sound": "Tri-tone"
    },
    data:{
      phoneNumber: order.phoneNumber,
      id: order.id,    
      read: false,
      navigate:"OrderDetailScreen",
    }
    });
  };

  const accessClick = () => {
    mutateAsync({ ...order, status: 1 });
    AddNotification(order);
    sendNotification(order);
  };
  return (
    <ItemBox>
      <p>Mã đơn hàng #{order?.id}</p>
      {order?.products.map((item) => (
        <span key={item.product.id}>
          {item.product.name} X{item.number},{" "}
        </span>
      ))}
      <span>Thành tiền: {order?.total}đ</span>

      <p>Số điện thoại: {order?.phoneNumber}</p>

      {order.status === 0 ? (
        <ItemButton onClick={() => accessClick()}>Duyệt</ItemButton>
      ) : (
        <BoxTrue>
          <p>Đã duyệt</p>
        </BoxTrue>
      )}
    </ItemBox>
  );
}

const ItemBox = styled.div`
  height: 110px;
  border-bottom: 1px solid black;
`;

const ItemButton = styled.button`
  position: relative;
  top: -80px;
  left: 1250px;
  background-color: green;
  color: white;
  font-weight: 700;
  height: 40px;
  width: 60px;
  border: none;
  border-radius: 15px;
`;
const BoxTrue = styled.div`
  position: relative;
  top: -80px;
  left: 1250px;
  color: gray;
  font-weight: 700;
  height: 40px;
  width: 70px;
  border: none;
  border-radius: 15px;
`;
