import axios from "axios";
axios.defaults.headers.common.Authorization = `key=AAAA9zkHyII:APA91bFRCXOtAuNFZzHKwpU28QsyLsZaQCHjSFItx3dakn5jPXAexchVeJFI0B9DW6guX1Tv8oZDJxRTGctGwnsl-G15cn00HOP64kyInWaOxD7ghjxBBgpRQcsuKMr6ClaPblivTk1x`;
export const sendFcmNotification = (notification) => {
  axios.post(`https://fcm.googleapis.com/fcm/send`, notification);
};
