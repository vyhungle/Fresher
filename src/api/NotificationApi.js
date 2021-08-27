import axios from "axios";

export const addNotification = (notification) => {
  axios.post(`https://api-bhx.herokuapp.com/notification`, notification);
};
